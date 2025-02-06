"use strict"

const disciplinas = [
    {nome:'PPDM', icon: 'internet.png', cor: 'yellow'},
    {nome:'PRO' , icon: 'rede.png',     cor: 'tomato'},
    {nome:'PWBE', icon: 'web.png',      cor: 'blue'},
    {nome:'PWFE', icon: 'webcam.png',   cor:'purple'}
]

function criarMenu(disciplina){

    //Criando tags
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    //Adicionando conteúdo
    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    //Adicionando conteudo na tag
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${disciplina.cor}`

    lista.appendChild(novoItem)


}

// const produtos = [
//     {nome: 'Nike Dri-FIT',     descricao: 'Camiseta de desempenho com tecnologia que mantém o corpo seco durante o treino.',       cor: ''},
//     {nome: 'Nike Sportswear',  descricao: 'Camiseta casual, confortável, com logo estampado e tecido de algodão.',                 cor: ''},
//     {nome: 'Nike Pro',         descricao: 'Camiseta justa e elástica, ideal para treinos intensos, com suporte e secagem rápida.', cor: ''},
// ]


disciplinas.forEach(criarMenu)