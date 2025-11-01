// 1. Dados do Projeto

// Criando um array de objetos para representar os projetos
const projetos = [

    {

        titulo: "To-do-List (Lista de tarefas)",
        descricao: "Meu primeiro projeto prático em JavaScript. Permite adicionar, marcar como concluída e remover tarefas. Inclui persistência de dados via localStorage",
        habilidades: "HTML, CSS, JavaScript (DOM, localStorage)",
        linkGitHub: "https://github.com/Ruan55/Projetos/tree/main/Projetos/To-do-List",


    },

    {

        titulo: "Calculadora Simples",
        descricao: "Projeto focado em lógica de programação e gerenciamento de estado. Implementa as quatro operações matemáticas básicas",
        habilidades: "HTML, CSS, JavaScript (Lógica e Event Listeners)",
        linkGitHub: "https://github.com/Ruan55/Projetos/tree/main/Projetos/Calculadora"

    },

    {

        titulo: "Gerador de Cores Aleatórias",
        descricao: "Projetos simples para manipular CSS via JavaScript, gerando cores hexadecimais aleatórias ao clique",
        habilidades: "HTML, CSS, JavaScript (Math)",
        linkGitHub: "https://github.com/Ruan55/Projetos/tree/main/Projetos/GeradorDeCoresAleatorias"
    }

];

// 2. Lógica do Carrosel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Estado atual do slide

// Função para gerar os cards de projeto e injetar no HTML
function GerarCardsProjetos(){

    projetos.forEach(projetos => {

        const card = document.createElement('div');
        card.classList.add('project-card');

        // Template String para o conteúdo do card
        card.innerHTML = `
        
            <h3>${projetos.titulo}</h3>
            <p>${projetos.descricao}</p>
            <p><strong>Foco:</strong> ${projetos.habilidades}</p>
            <a href="${projetos.linkGitHub}"></a>
        
        `;

        track.appendChild(card);

    });

}

// Função para mover o carrosel
function MoverCarrosel(){

    // Calcula o quanto o track deve se deslocar (ex: -100%, -200%, etc.)
    const deslocamento = currentIndex * -100;
    track.style.transform = `translateX(${deslocamento}%)`;

}

// Funções de navegação
function ProximoSlide(){

    // Se não for o último slide, avança
    if(currentIndex < projetos.length - 1){

        currentIndex++;

    }

    else{

        // Volta para o primeiro slide (Loop)
        currentIndex = 0;

    }

    MoverCarrosel();

}

function SlideAnterior(){

    // Se não for o primeiro slide, recua
    if(currentIndex > 0){

        currentIndex--;
        
    }

    else{

        // Vai para o último slide (Loop)
        currentIndex = projetos.length - 1;

    }

    MoverCarrosel();

}

// Event Listeners para os botões
nextBtn.addEventListener('click', ProximoSlide);
prevBtn.addEventListener('click', SlideAnterior);

// 3. Inicialização: Chama a função para injetar os dados no HTML
document.addEventListener('DOMContentLoaded', () => {

    GerarCardsProjetos();
    MoverCarrosel(); // Garante que o primeiro slide esteja visível"

});