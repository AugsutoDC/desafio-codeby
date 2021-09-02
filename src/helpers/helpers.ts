export function converterEmReal(num: number): string {
    return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export function converterEmFloat(num: number): number {
    return Number(parseFloat(String(num)).toFixed(2));
}