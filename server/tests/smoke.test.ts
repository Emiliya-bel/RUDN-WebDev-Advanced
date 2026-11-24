import {describe, expect, it} from 'vitest';

function power(a: number, b: number) { return a**b };

describe("Смоук тест", () => {
    it("Проверка возведения 2 в 3 степень", () => {
        const a = 2;
        const b = 3;

        expect(power(a, b)).toBe(8);
    });

    it("Проверка возведения 5 во 2 степень", () => {
        const a = 5;
        const b = 2;

        expect(power(a, b)).toBe(25);
    });
    it('Невалидный тест-кейс', () =>{
    const a =10;
    const b =20;

    expect(power(a,b)).not.toBe(70);
})

});

