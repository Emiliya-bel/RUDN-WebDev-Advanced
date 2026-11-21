import {describe, expect, it} from 'vitest';

function quadratic(a: number, b: number, c: number, x: number) { 
    return a* (x**2)+b*x+c };


describe("Фулл тест", () => {
    it("Проверка функции возедения в степень на 2 и 3", () => {
        const a = 2;
        const b = 3;
        const c = 2;

        expect(quadratic(a, b, c, 1)).toBe(7);
    });

    it("Проверка возведения 5 во 2 степень", () => {
        const a = 5;
        const b = 2;
        const c = 2;

        expect(quadratic(a, b, c, 3)).toBe(53);
    });
    it('Невалидный тест-кейс', () =>{
    const a =10;
    const b =20;
    const c = 2;
     expect(quadratic(a,b,c, 2)).toBe(82);
})

});



   

