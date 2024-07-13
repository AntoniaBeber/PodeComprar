Considere o template básico PodeComprar disponibilizado no GitHub da turma como o template inicial para a UI. Considere, também, o servidor básico PodeComprarServer disponibilizado no GitHub da turma como a API disponível para ser consultada pela UI. Você deve 1) adaptar a UI para que seja feita uma consulta a API para identificar se o usuário pode ou não pode comprar bebida alcoólica conforme o ano de nascimento e o país de origem. Além disso, você 2) deve adicionar um indicativo de carregamento da API no botão. Considere o Wire-frame abaixo como referência. Por fim, 3) você de apresentar uma mensagem (pode ser um alert) indicando para o usuário se ele pode ou não pode comprar bebida alcoólica conforme os parâmetros que foram especificados nos inputs.

Especificação da Rota de Consumo
A rota de consumo é do tipo GET e o acesso para ser através da URL http://localhost:3002/pode-comprar. A endpoint recebe um body do tipo JSON com duas propriedades: anoNascimento e pais. Considere o exemplo abaixo, como exemplo de DTO de envio. 

{
    "anoNascimento": "2006",
    "pais": "JP"
}
​
Além disso, a API tem um retorno que também é no formato JSON. O objeto retornado possuí apenas uma propriedade de nome podeComprar. Essa propriedade indica se o usuário pode ou não pode comprar álcool conforme os parâmetros da API. Considere o exemplo abaixo como DTO de retorno. 

{
    "podeComprar": false
}
