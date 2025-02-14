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

const produto = [

    {
        nome:'Back-End',
        descricao:'Aprenda a criar APIs, integrar bancos de dados e gerenciar servidores com Node.js, Python ou Java.',
        photo:'backend.png',
        valor:'R$179,90',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART',
        link: 'https://www.udemy.com/course/web-completo/?audience=Keyword&campaigntype=Search&funnel=Conversion&gad_source=1&gclid=CjwKCAiAzba9BhBhEiwA7glbas5cUvmSh7NrfPxaqx2z9-UfRWXVr2ejtypCDX_lPiBMg6bDb5mKdxoC1NUQAvD_BwE&language=PT&matchtype=b&portfolio=Brazil&priority=Beta&product=Course&test=&topic=WebDevelopment&utm_campaign=MX_FF-CONV_BR_Search-NB_Keyword_Beta_la.PT_Google&utm_content=&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_164341648705_._ad_706273691404_._kw_desenvolvimento+web+back+end_._de_c_._dm__._pl__._ti_kwd-940650276447_._li_9196805_._pd__._&couponCode=2021PM25'

    },
    {
        nome:'Front-End',
        descricao:'Desenvolva interfaces modernas com HTML, CSS, JavaScript e frameworks como React ou Vue.js.',
        photo:'Front-end.png',
        valor:'R$239,90',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART',
        link: 'https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/?couponCode=2021PM25'
    },
    {
        nome:'Projetos',
        descricao:'Domine metodologias ágeis (Scrum, Kanban) e ferramentas como Trello e Jira.',
        photo:'kotlin.png',
        valor:'R$169,90',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART',
        link: 'https://www.udemy.com/course/planejamento-gestao-de-projetos-tradicional-pmi-completo/?couponCode=2021PM25'
    },
    {
        nome:'Mobile',
        descricao:'Crie apps para Android e iOS com Flutter, React Native, Swift ou Kotlin.',
        photo:'android.png',
        valor:'R$219,90',
        duracao:'Duração',
        modulos: ['M1','M2','M3','M4'],
        cart:'ADD TO CART',
        link: 'https://www.udemy.com/course/curso-de-desenvolvimento-android-oreo/?couponCode=2021PM25'

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

    const subtitulo = document.createElement('div')
    subtitulo.className = 'subtitulo'
    const subtituloH2 = document.createElement('h2')

    const periodo = document.createElement('div')
    periodo.className = 'periodo'

    const periodos = document.createElement('div')
    periodos.className = 'periodos'
    const periodosP = document.createElement('p')

    const carrinhoLink = document.createElement('a')
    carrinhoLink.className = 'carrinho'
    carrinhoLink.href = produtos.link
    const carrinhoH1 = document.createElement('h1')

    
    //Adicionar conteudo na tag

    textoH1.textContent = produtos.nome
    descricaoP.textContent = produtos.descricao
    img.src =`./img_card/${produtos.photo}`
    valorH1.textContent = produtos.valor
    subtituloH2.textContent = produtos.duracao
    periodosP.textContent = produtos.modulos.join(',')
    carrinhoH1.textContent = produtos.cart
    
    
    

    carrinhoH1.textContent = produtos.cart


    

    /***********************************************/

    //Adicionando aos pais
    carrinhoLink.appendChild(carrinhoH1)
    periodos.appendChild(periodosP)
    periodo.appendChild(periodos)
    modificacao.appendChild(periodo)
    valor.appendChild(valorH1)
    subtitulo.appendChild(subtituloH2)
    modificacao.appendChild(subtitulo)
    modificacao.appendChild(valor)




    imagem.appendChild(img)
    texto.appendChild(textoH1)
    descricao.appendChild(descricaoP)
    textos.replaceChildren(texto,descricao)



    /***********************************************/
    card.appendChild(textos)
    card.appendChild(imagem)
    card.appendChild(modificacao)
    card.appendChild(carrinhoLink)
    container.appendChild(card)
}




disciplinas.forEach(criarMenu)
produto.forEach(criarCard)
