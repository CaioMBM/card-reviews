// Local onde está armazenado os dados das pessoas
const reviews = [
    {   
        id: 1,
        name: "Caio Montenegro",
        job: "Web Developer",
        img: "img/caio.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos rem quam corrupti, dolorum deserunt esse quo magnam dolores alias expedita, ad ipsa delectus repellat ex iste amet tempore obcaecati.",
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        job: "Jogador de Futebol",
        img: "img/cr7.jpg",
        text: "Cristiano Ronaldo é um dos maiores jogadores de futebol da história. Nascido em 5 de fevereiro de 1985, na Madeira, Portugal, ele é conhecido por sua incrível habilidade, velocidade, força física e capacidade de marcar gols.",
    },
    {
        id: 3,
        name: "Less",
        job: "Pro-player de Valorant",
        img: "img/less.jpg",
        text: "É um jogador profissional brasileiro de Valorant, conhecido por sua atuação na equipe LOUD. Seu papel no jogo é de de sentinela, utilizando agentes como Killjoy e Cypher ele desempenha um papel crucial na defesa e controle de área",
    },
];

// Selecionando o que vai ser alterável do card
const img    = document.getElementById("person-img");
const author = document.getElementById("author");
const job    = document.getElementById("job");
const info   = document.getElementById("info");

// Selecionando os botões
const btnAntecessor = document.getElementById("btnAntecessor");
const btnSucessor   = document.getElementById("btnSucessor");

// Definindo item (do array) inicial para que exiba quando a página ser carregada
let currentItem = 0;

// Página sendo carregada
window.addEventListener('DOMContentLoaded', function(){
    showPerson();  
});

// Função para mudar as informações do card
function showPerson(){
    const item = reviews[currentItem];

    img.src            = item.img;
    author.textContent = item.name;
    job.textContent    = item.job;
    info.textContent   = item.text;
};

// addEventListener para mostrar próxima pessoa
btnSucessor.addEventListener("click", function(){ 
    currentItem++;

    // If para não deixar que o usuário chegue no último obejto (pessoa) do array (do card) e clique para ir para o próximo, como não terá próximo então iria dar erro sem esse if.
    // Essa condição faz com que trave ao chegar na última pessoa do card
    if(currentItem > reviews.length -1){
        currentItem = 0;
    };
    showPerson();

    // Essa condição faz com que trave ao chegar na última pessoa do card
    // if(currentItem < reviews.length){
    //     showPerson();
    // };
    
});

// addEventListener para mostrar pessoa anterior
btnAntecessor.addEventListener("click", function(){ 
    currentItem--;

    // If para não deixar que o usuário chegue no primeiro obejto (pessoa) do array (do card) e clique para ir para o antecessor, como não terá o antecessor então iria dar erro sem esse if.
    // Essa condição faz com que trave ao chegar na última pessoa do card
    if(currentItem < 0){
        currentItem = reviews.length -1;
    };
    showPerson();
});