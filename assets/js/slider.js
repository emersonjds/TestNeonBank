var controls = document.querySelectorAll('.controls');

controls.forEach((control) => {
	control.style.display = 'inline-block'
})

var slides = document.querySelectorAll('#slides .slide')
var currentSlide = 0

function proximoSlide() {
	nextSlide()
}

function nextSlide(){
	goToSlide(currentSlide + 1)
}

function backSlide() {
	goToSlide(currentSlide - 1)
}

function goToSlide(n){
	slides[currentSlide].className = 'slide'
	currentSlide = (n+slides.length)%slides.length
	slides[currentSlide].className = 'slide showing'
}

var next = document.getElementById('next')
var previous = document.getElementById('previous')

next.onclick = function(){
    nextSlide()
}

previous.onclick = function(){
    backSlide()
};