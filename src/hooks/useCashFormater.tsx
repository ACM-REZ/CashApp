export const useCashFormater = (money: number) => { // Красивое форматирование числа
    return String(money).split( /(?=(?:\d{3})+(?!\d))/ ).join(' ');
} 