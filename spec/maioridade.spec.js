describe("Teste de Classificação de maior idade", function(){
    it("Classificação Maior idade", function(){
        expect(maioridade(20)).toBe("Maior idade");
    })

})

describe("Teste de Classificação de menor idade", function(){
    it("Classificação Menor idade", function(){
        expect(maioridade(10)).toBe("Menor idade");
    })

})

describe("Teste de Classificação de idade inválida", function(){
    it("Entrada inválida", function(){
        expect(maioridade(0)).toBe("Idade inválida")
    })

})