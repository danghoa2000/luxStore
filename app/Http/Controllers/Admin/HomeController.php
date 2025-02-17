<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    use AuthenticatesUsers;

    public function index(Request $request)
    {
        $statistic = Order::selectRaw('SUM(case when status = 2 then price end) AS total')
            ->selectRaw('COUNT(case when status = 0 then 1 end) as order_pending')
            ->selectRaw('COUNT(case when status = 2 then 1 end) as order_success')
            ->selectRaw('COUNT(case when status = 3 then 1 end) as order_cancel');

        [$startDate, $endDate] = $this->getDateRange($request);
        $statistic->whereBetween('created_at', [$startDate, $endDate]);

        $statisticOrder = $statistic->get();
        $statisticTotalAssets = $this->statisticTotalAssets($statistic, $request);
        $bestSaledStatistic = $this->bestSaledStatistic($request);
        $ratingStatistic = $this->ratingStatistic($request);

        return response()->json([
            'statistic' => $statisticTotalAssets,
            'orderStatistic' => $statisticOrder,
            'bestSaledStatistic' => $bestSaledStatistic,
            'ratingStatistic' => $ratingStatistic,
            'code' => Response::HTTP_OK,
            'message' => 'success'
        ]);
    }

    private function getDateRange(Request $request)
    {
        $startDate = $request->date_from ? Carbon::parse($request->date_from)->format('Y-m-d') : Carbon::now()->format('Y-m-01');
        $endDate = $request->date_to ? Carbon::parse($request->date_to)->format('Y-m-d') : Carbon::now()->endOfMonth()->format('Y-m-d');
        return [$startDate, $endDate];
    }

    public function statisticTotalAssets($statistic, $request)
    {
        [$startDate, $endDate] = $this->getDateRange($request);

        switch ($request->display_by) {
            case 'week':
                $statistic->selectRaw('WEEK(created_at) AS week, YEAR(created_at) AS year')
                    ->groupByRaw('WEEK(created_at), YEAR(created_at)');
                break;
            case 'month':
                $statistic->selectRaw('DATE_FORMAT(created_at, "%b") AS month, YEAR(created_at) AS year')
                    ->groupByRaw('DATE_FORMAT(created_at, "%b"), YEAR(created_at)');
                break;
            case 'year':
                $statistic->selectRaw('YEAR(created_at) AS year')
                    ->groupByRaw('YEAR(created_at)');
                break;
            default:
                $statistic->selectRaw('DATE_FORMAT(created_at, "%b %e, %Y") AS date, DATE(created_at) AS createDate')
                    ->groupByRaw('DATE(created_at), DAY(created_at)');
                break;
        }

        $statistic = $statistic->get();
        $data = $this->initializeData($startDate, $endDate, $request->display_by);

        foreach ($statistic as $chart) {
            $index = $this->getIndex($chart, $request->display_by);
            $data[$index]['total'] = $chart->total;
            $data[$index]['order_pending'] = $chart->order_pending;
            $data[$index]['order_cancel'] = $chart->order_cancel;
            $data[$index]['order_success'] = $chart->order_success;
        }

        return $data;
    }

    private function initializeData($startDate, $endDate, $displayBy)
    {
        $data = [];
        $startDate1 = Carbon::parse($startDate);
        $endDate1 = Carbon::parse($endDate);

        switch ($displayBy) {
            case 'week':
                do {
                    $index = 'week: ' . $startDate1->format('W') . ', ' . $startDate1->format('Y');
                    $data[$index] = ['total' => 0, 'order_pending' => 0, 'order_cancel' => 0, 'order_success' => 0];
                } while ($startDate1->addWeek()->lte($endDate1));
                break;
            case 'month':
                do {
                    $index = $startDate1->format('Y') . '-' . $startDate1->format('M');
                    $data[$index] = ['total' => 0, 'order_pending' => 0, 'order_cancel' => 0, 'order_success' => 0];
                } while ($startDate1->addMonth()->lte($endDate1));
                break;
            case 'year':
                do {
                    $index = $startDate1->format('Y');
                    $data[$index] = ['total' => 0, 'order_pending' => 0, 'order_cancel' => 0, 'order_success' => 0];
                } while ($startDate1->addYear()->lte($endDate1));
                break;
            default:
                do {
                    $index = $startDate1->toFormattedDateString();
                    $data[$index] = ['total' => 0, 'order_pending' => 0, 'order_cancel' => 0, 'order_success' => 0];
                } while ($startDate1->addDay()->lte($endDate1));
                break;
        }

        return $data;
    }

    private function getIndex($chart, $displayBy)
    {
        switch ($displayBy) {
            case 'week':
                return 'week: ' . ($chart->week < 10 ? '0' . $chart->week : $chart->week) . ', ' . $chart->year;
            case 'month':
                return $chart->year . '-' . $chart->month;
            case 'year':
                return $chart->year;
            default:
                return $chart->date;
        }
    }

    public function bestSaledStatistic($request)
    {
        $statistic = Order::select('order.status as order_status')
            ->join('order_detail', 'order_detail.order_id', '=', 'order.id')
            ->join('product_detail', 'order_detail.product_id', '=', 'product_detail.id')
            ->join('products', 'products.id', '=', 'product_detail.product_id')
            ->selectRaw('SUM(order_detail.qty) as total, products.name')
            ->groupBy('product_detail.product_id')
            ->where('order.status', 2);

        [$startDate, $endDate] = $this->getDateRange($request);
        $statistic->whereBetween('order.created_at', [$startDate, $endDate]);

        return $statistic->limit(10)->offset(0)->get();
    }

    public function ratingStatistic($request)
    {
        [$startDate, $endDate] = $this->getDateRange($request);

        return Product::withCount([
            'reviews AS rating' => function ($query) use ($startDate, $endDate) {
                $query->select(DB::raw('AVG(rate)'))
                    ->whereBetween('reviews.created_at', [$startDate, $endDate]);
            }
        ])->limit(10)->offset(0)->get();
    }
}
