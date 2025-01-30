function cta(){
    window.open ("https://wa.me/558487026631?text=Olá%20Kilvia,%20gostaria%20de%20saber%20como%20fazer%20o%20meu%20pedido.%20😊",
    "_blank" )
} 

let currentIndex = 0
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')

//funçao relacionada com a variaveis acima; faz movimentar o slide

function showSlide (index){
    if( index < 0){
        currentIndex = totalSlides -1;
    }else if (index >= totalSlides) {
        currentIndex = 0
    }

    const offset = currentIndex *100 //isso faz deslocar a imagem
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
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
showSlide(currentIndex)