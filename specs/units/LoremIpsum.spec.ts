



describe('Teste do Lorem Ipsum', () => {
    let _service: LoremIpsumService
  
  
    it('Deve devolver o array ordenado em ordem crescente , sem tirar os duplicados', () => {
      const resultado = _service.getLoremIpsum(1)
      let tamanho = resultado.split(" ").length
      
      expect(tamanho).toEqual(1)
    })
  
  })