export const formatPrice = (item) => {
    item = item.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    return item;
};
