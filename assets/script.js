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




const items = document.querySelectorAll('banner-img');
const nbslide = items.length;
const flechedroite = document.querySelector('.arrow-left');
const flechegauche = document.querySelector('.arrow_right');
let arrow = document.querySelector('.arrow-left');
let arrow = document.querySelector('.arrow-left');


arrow.addEventListener('click', function () { alert('fleche gauche') });