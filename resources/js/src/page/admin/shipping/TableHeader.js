import { format, parseISO } from "date-fns";
import { DATE_TIME } from "../../../../constants/constants";
import { formatPrice } from "../../../../utils/helper";

// id -> name column
// numeric: aligin text
// label -> display label text
// type -> condition display input type
// render -> optimize display data
// convert -> display with translation

const TableHeader = {
    province: {
        id: "province_id",
        numeric: false,
        label: "shipping.list.table.province",
        type: "text",
        render: (value) => (value.province ? value.province.name : ""),
    },
    district: {
        id: "district_id",
        numeric: true,
        label: "shipping.list.table.district",
        render: (value) => (value.district ? value.district.name : ""),
    },
    commune: {
        id: "name",
        numeric: true,
        label: "shipping.list.table.commune",
        render: (value) => (value.commune ? value.commune.name : ""),
    },
    price: {
        id: "telephone",
        numeric: true,
        label: "shipping.list.table.price",
        render: (value) => (value.price ? formatPrice(value.price) : ""),
    },
};

export default TableHeader;
