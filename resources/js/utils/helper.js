export const formatPrice = (item) => {
    return item
        ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item)
        : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(0)
};
