let currentColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = currentColor;
})

painting.addEventListener('dblclick', function(l){
	l.target.style.backgroundColor = 'white';
})

const palette = document.querySelector('.palette')

palette.addEventListener('click', function (w){
	currentColor = w.target.id;
})

const button = document.querySelector('.reset')
let pixels = document.querySelectorAll('.pixel')

button.addEventListener('click', function(){
	for (let i = 0; i < pixels.length; i++)
	{
	pixels[i].style.backgroundColor = "white"
	}
})

