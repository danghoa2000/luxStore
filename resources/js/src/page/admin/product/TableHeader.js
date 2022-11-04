// id -> name column
// numeric: aligin text
// label -> display label text
// type -> condition display input type
// render -> optimize display data
// convert -> display data with translation

const TableHeader = {
    image: {
        id: "image",
        numeric: false,
        label: "product.list.table.image",
        type: "text",
    },
    product_code: {
        id: "product_code",
        numeric: false,
        label: "product.list.table.product_code",
        type: "text",
    },
    status: {
        id: "status",
        numeric: true,
        label: "product.list.table.status",
        convert: true,
        // render: (value) => `status.${value.status}`,
        type: "status",
    },
    name: {
        id: "name",
        numeric: true,
        label: "product.list.table.name",
    },
    price: {
        id: "price",
        numeric: true,
        label: "product.list.table.price",
    },
    category_id: {
        id: "category_id",
        numeric: true,
        label: "product.list.table.category_id",
        // render: (value) => value.group_category ? value.group_category.name : '',
    },
    manufacturer_id: {
        id: "manufacturer_id",
        numeric: true,
        label: "product.list.table.manufacturer_id",
        // render: (value) => value.group_category ? value.group_category.name : '',
    },
    description: {
        id: "description",
        numeric: true,
        label: "product.list.table.description",
    },
};

export default TableHeader;
