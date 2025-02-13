"use strict"

const disciplinas = [
    {nome:'PPDM', icon: 'mobile.png',      cor: 'yellow'},
    {nome:'PRO' , icon: 'projetos.png',    cor: 'tomato'},
    {nome:'PWBE', icon: 'back-end.png',    cor: 'blue'},
    {nome:'PWFE', icon: 'front-end.png',   cor:'purple'}
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

const item = [

    {
        nome:'Back-End',
        descricao:'Aprenda a criar APIs, integrar bancos de dados e gerenciar servidores com Node.js, Python ou Java.',
        photo:'backend.png',
        valor:'R$599,00',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART'

    },
    {
        nome:'Front-End',
        descricao:'Desenvolva interfaces modernas com HTML, CSS, JavaScript e frameworks como React ou Vue.js.',
        photo:'Front.png',
        valor:'R$790,00',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART' 
    },
    {
        nome:'Mobile',
        descricao:'Crie apps para Android e iOS com Flutter, React Native, Swift ou Kotlin.',
        photo:'kotlin.png',
        valor:'R$600,00',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART'
    },
    {
        nome:'Mobile',
        descricao:'Crie apps para Android e iOS com Flutter, React Native, Swift ou Kotlin.',
        photo:'android.png',
        valor:'R$600,00',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART'
    }
]

function criarCard (produtos){

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.className = 'card'

    //Adicionando DIVs de texto

    const textos = document.createElement('div')
    textos.className = 'textos'

    const texto = document.createElement('div')
    texto.className = 'texto'

    const textoH1 = document.createElement('h1')
    

    const descricao = document.createElement('div')
    descricao.className = 'descricao'

    const descricaoP = document.createElement('p')


    //Adicionando DIV de imagem

    const imagem = document.createElement('div')
    imagem.className = 'imagem'

    const img = document.createElement('img')

    //Adicionando DIV de modificacao

    const modificacao = document.createElement('div')
    modificacao.className = 'modificacao'

    const valor = document.createElement('div')
    valor.className = 'valor'

    const valorH1 = document.createElement('h1')


    //Adicionando DIV de subtitulo

    const subtitulo = document.createElement('div')
    subtitulo.className = 'subtitulo'

    const subtituloH2 = document.createElement('h2')


    //Adicionando DIV carrinho

    const carrinho = document.createElement('div')
    carrinho.className = 'carrinho'

    const carrinhoH1 = document.createElement('h1')

    //Adicionar conteudo na tag

    textoH1.textContent = produtos.nome
    descricao.textContent = produtos.descricao
    imagem.src=`./img_card/${produtos.imagem}`



    

    /***********************************************/

    carrinho.appendChild(carrinhoH1)

    subtitulo.appendChild(subtituloH2)
    valor.appendChild(valorH1)
    modificacao.appendChild(valor)
    imagem.appendChild(img)


    descricao.appendChild(descricaoP)
    texto.appendChild(descricao)
    texto.appendChild(textoH1)
    textos.appendChild(texto)



    /***********************************************/
    card.appendChild(textos)
    card.appendChild(imagem)
    card.appendChild(modificacao)
    card.appendChild(carrinho)
    


    container.appendChild(card)
}




disciplinas.forEach(criarMenu)
item.forEach(criarCard)
