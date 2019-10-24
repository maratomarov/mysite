let textArea = document.getElementById('form-text')
let notesArea = document.getElementById('notes-area')

function addNote(e){
	e.preventDefault()
	
	let noteText = textArea.value
	
	let checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.setAttribute('onclick','crossOutText(this)')
	
	let p = document.createElement('p')
	p.innerText = noteText

	// let today = document.createElement('new Date()')
	
	let rbutton = document.createElement('button')
	rbutton.innerText = 'Удалить'
	rbutton.setAttribute('onclick','removeNote(this)')
	
	let noteBlock = document.createElement('div')
	noteBlock.classList.add('note')

	var date = new Date()
	var today = document.createElement('p')
	today.innerText = date.getHours() + ":" + date.getMinutes() + ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
	today.classList.add('date')

	noteBlock.appendChild(checkbox)
	noteBlock.appendChild(p)
	noteBlock.appendChild(today)
	noteBlock.appendChild(rbutton)
	notesArea.appendChild(noteBlock)
	textArea.value=""
}

function removeNote(button){
	let noteBlock = button.parentNode
	notesArea.removeChild(noteBlock)
}

// function crossOutText(checkbox){
// 	let noteBlock = checkbox.parentNode
// 	let p = noteBlock.childNodes[1]
// 	if (p.style.textDecoration != 'line-through'){
// 		p.style.textDecoration = 'line-through'
// 		p.style.color = '#888'
// 	}else{
// 		p.style.textDecoration = 'none'
// 		p.style.color = '#000'
// 	}
// }

function crossOutText(checkbox){
	let noteBlock = checkbox.parentNode
	let p = noteBlock.childNodes[1]
	if (p.className!= 'cross-out'){
		p.className = 'cross-out'
	}else{
		p.classList.remove('cross-out')
	}
}