 const monstros = [
    {
        id: 1,
        nome: 'Vulcano',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem placeat et, autem similique at ipsa accusamus ipsum sint quis eum nesciunt deleniti, odit quo molestias ratione dolores voluptatem numquam?',
        foto:'https://robohash.org/Vulcano'
    },

    {
        id: 2,
        nome: 'Thor',
        altura: 3,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem placeat et, autem similique at ipsa accusamus ipsum sint quis eum nesciunt deleniti, odit quo molestias ratione dolores voluptatem numquam?',
        foto:'https://robohash.org/Thor'
    },

    {
        id: 3,
        nome: 'Zeus',
        altura: 7,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem placeat et, autem similique at ipsa accusamus ipsum sint quis eum nesciunt deleniti, odit quo molestias ratione dolores voluptatem numquam?',
        foto:'https://robohash.org/ Zeus'
    },

    {
        id: 4,
        nome: 'Kratos',
        altura: 1.4,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem placeat et, autem similique at ipsa accusamus ipsum sint quis eum nesciunt deleniti, odit quo molestias ratione dolores voluptatem numquam?',
        foto:'https://robohash.org/Kratos'
    },

]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark')
})


const todosOsMonstros = monstros.map((monstro) => {
  return `<div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}"> 
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMonstros
