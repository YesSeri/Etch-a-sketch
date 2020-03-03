const clearButton = document.querySelector("#clearButton")
const container = document.querySelector("#container")
createGrid()


addListenerClearButton()


function addListenerClearButton (){
	clearButton.addEventListener("click", function(e) {
	    let elem = document.getElementsByClassName("colorSquare");
	    const x = elem.length
	    for (let i=0; i<x;i++){
	        elem[0].remove()   
	    }
	    let length = prompt("What length should side of the square have?")
	    createGrid(length)
	})
}

function changeColor(){
	const colorSquare = event.target;
	colorSquare.setAttribute('style', `background: ${randColor()}`)
}


function createGrid(y = 2){
	container.style.grid = `repeat(${y}, 1fr)/repeat(${y}, 1fr)`;
	
	for (let i = 0;i<y**2;i++){
		const div = document.createElement('div')
		div.classList.add('colorSquare');  
		container.appendChild(div)
		div.addEventListener("mouseenter", changeColor)		
	}
	let divs = document.querySelectorAll(".colorSquare")
}

function deleteDivs(){

}

function randColor() {
	let r = Math.floor(Math.random()*255)
	let g = Math.floor(Math.random()*255)
	let b = Math.floor(Math.random()*255)

	return `rgb(${r},${g},${b})`
}

