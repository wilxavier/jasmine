describe("Teste Calculadora", function(){
    it("Somas válidas", function(){
        expect(adicao(1,2)).toBe(3);
        expect(adicao(9,9)).toBe(18);
    })
    it("Subtrações válidas", function(){
        expect(subtracao(5,2)).toBe(3);
        expect(subtracao(14,9)).toBe(5);
    })

    it("Multiplicações válidas", function(){
        expect(multiplicacao(3,4)).toBe(12);
        expect(multiplicacao(5,2)).toBe(10);
    })

    it("Divisões válidas", function(){
        expect(divisao(6,2)).toBe(3);
        expect(divisao(18,9)).toBe(2);
    })

});