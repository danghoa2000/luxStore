// id -> name column
// numeric: aligin text
// label -> display label text
// type -> condition display input type
// render -> optimize display data
// convert -> display data with translation
// inputMode -> display type of input filter

const TableHeader = {
    image: {
        id: "image",
        numeric: false,
        label: "product.list.table.image",
        type: "text",
        inputMode: 'text'
    },
    product_code: {
        id: "product_code",
        numeric: false,
        label: "product.list.table.product_code",
        type: "text",
        inputMode: 'text'
    },
    status: {
        id: "status",
        numeric: true,
        label: "product.list.table.status",
        convert: true,
        render: (value) => `status.${value.status}`,
        type: "status",
        inputMode: 'select'
    },
    name: {
        id: "name",
        numeric: true,
        label: "product.list.table.name",
        inputMode: 'text'
    },
    price: {
        id: "price",
        numeric: true,
        label: "product.list.table.price",
        render: (value) => value?.product_price[0]?.price || '',
        inputMode: 'text'
    },
    qty: {
        id: "qty",
        numeric: true,
        label: "product.list.table.qty",
        render: (value) => value?.product_detail_sum_qty || '',
        inputMode: 'text'
    },
    category_id: {
        id: "category_id",
        numeric: true,
        label: "product.list.table.category_id",
        render: (value) => value.category ? value.category.name : '',
        inputMode: 'select'
    },
    group_category_id: {
        id: "group_category_id",
        numeric: true,
        label: "product.list.table.group_category_id",
        render: (value) => value?.group_category?.name || '',
        inputMode: 'select'
    },
    manufacturer: {
        id: "manufacturer",
        numeric: true,
        label: "product.list.table.manufacturer_id",
        render: (value) => value.manufacturer ? value.manufacturer.name : '',
        inputMode: 'select'
    },
};

export default TableHeader;
