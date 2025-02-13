function cta(){
    window.open ("https://wa.me/558487026631?text=Olá%20Kilvia,%20gostaria%20de%20saber%20como%20fazer%20o%20meu%20pedido.%20😊",
    "_blank" )
} 

const carrossll = document.getElementById('carrossel')
const imagens = document.querySelectorAll('.carrossel .imagens')

let move = 0

function carrossel(){
    move++;

    if(move > imagens.length -1){
        move = 0;
    }
        carrossll.style.transform = `translateX(${-move *13}em)`;

}
    setInterval(carrossel, 2000)

function ctaa(){
    window.open("https://www.instagram.com/kilvia_cakes1?igsh=MWh2MWJ3bHk3Mzgzaw==", "_blank")
}


/*let currentIndex = 0
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
const slidesContainer = document.querySelector('.slides')


//funçao relacionada com a variaveis acima; faz movimentar o slide

function showSlide (index){
    if( index < 0){
        currentIndex =  totalSlides-1;
    }else if (index >= totalSlides) {
        currentIndex = 0
    }

    const offset = -currentIndex *100 //isso faz deslocar a imagem
    slidesContainer.style.transition = 'transform 0.5 ease' //cria uma suave transição
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
   


    if(currentIndex === totalSlides -1){
        setTimeout(()=>{
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = 'translateX(0%)'; //faz ir pra a primeira imagem sem animação
        },500); //settimeout aqui vai servir pra esperar o slide atual desaparecer
    }else if(currentIndex === 0){
        setTimeout(()=>{
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(-${totalSlides - 1}%)`; //`translateX(-${totalSlides -1}00%)`
        }, 500)
    }
}


nextButton.addEventListener('click', ()=>{
    currentIndex++;
    showSlide(currentIndex)
})

prevButton.addEventListener('click', () =>{
      currentIndex--;
      showSlide(currentIndex)
})

//inicia o carrossel
showSlide(currentIndex)*/