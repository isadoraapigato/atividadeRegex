function repeticoes(frase, palavraBusca){
  var palavras = []
  var fraseSeparada = frase.split(" ")
  var regexp = new RegExp(palavraBusca, 'ig')
  for(let i = 0; i < fraseSeparada.length; i++){
    if(regexp.test(fraseSeparada[i])) palavras.push(fraseSeparada[i])
  }
  return `${palavraBusca} repete ${frase.length}`
}

console.log(repeticoes("Eu amo jogar basquete", "basquete"))