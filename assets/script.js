const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]





let arrow_left = document.querySelector('.arrow_left')
let arrow_right = document.querySelector('.arrow_right')

let img = document.querySelector('.banner-img')
let courantslides = 0


arrow_left.addEventListener('click', function () {
	/*alert('fleche gauche')*/
	courantslides = courantslides - 1 //courantslide-- 
	img.src = './assets/images/slideshow/' + slides[courantslides].image

})

arrow_right.addEventListener('click', function () {
	/*alert('fleche droite')*/
	courantslides = courantslides + 1 //courantslide++ 
	img.src = './assets/images/slideshow/' + slides[courantslides].image
});



const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('arrow_right');
const precedent = document.querySelector('arrow_left');
let count = 0;

//function slidesuivante() {
//items[count].classList.remove('banner-img')

//if (count < nbSlide - 1) {
//	count++
//} else {
//	count = 0
//}

//items[count].classList.add('banner-img')
//console.log(count);
//}



let dots = ""
for (let i = 0; i < slides.length; i++) {


	if (courantslides == i) {
		dots += "<span class='dot dot_selected'></span>"
	}
	else {
		dots += "<span class='dot'></span>"
	}
}

let slidesHTML = document.querySelector('.dots')
slidesHTML.innerHTML = dots

/*let img = 1

let imgHTML = document.querySelector('banner-img')
imgHTML.src = slider[img].image

let textHTML = document.querySelector('benner-text')
textHTML.innerHTML = slider.text*/