const clearButton = document.querySelector("#clearButton")
const container = document.querySelector("#container")
createDivs()
const divs = document.querySelectorAll(".colorSquare")

eventListenerClearButton()
addListenerDivs()

function createDiv (){
	const div = document.createElement('div')
	div.classList.add('colorSquare');  
	
	container.appendChild(div)
}

function createDivs(){
	let y = 40
	document.getElementById("container").style.gridTemplateColumns = `repeat(${y}, 1fr)`;
	for (let i = 0;i<y**2;i++){
		createDiv()
	}
}

function eventListenerClearButton (){
	clearButton.addEventListener("click", function(e) {
		divs.forEach((div)=>{
			div.setAttribute('style', `background: 255,255,255`)
		})
	})
}

function randColor() {
	let r = Math.floor(Math.random()*255)
	let g = Math.floor(Math.random()*255)
	let b = Math.floor(Math.random()*255)

	return `rgb(${r},${g},${b})`
}

function size(){
	alert("How big should the palette be?")
}

function addListenerDivs(){
	divs.forEach((div) =>  {
		div.addEventListener("mouseenter", function(e) {
				div.setAttribute('style', `background: ${randColor()}`)
			})
		div.addEventListener("mouseleave", function(e){
		})
	})	
}

