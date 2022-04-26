let currentColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = currentColor
})

const palette = document.querySelector('.palette')

palette.addEventListener('click', function (w){
	currentColor = w.target.id
})