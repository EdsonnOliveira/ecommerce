export function formatNumber(number: number) {
    return new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(number)
}