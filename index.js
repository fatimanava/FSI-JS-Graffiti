
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image')
    for(let i = 0; i < dogImages.length; i++){
	    dogImages[i].style.borderRadius = '50%'
}

let dogNames = document.querySelectorAll('.dog-name')
    for(let i = 0; i < dogNames.length; i++){
        dogNames[i].style.textAlign = 'left'
    }

let footer = document.querySelector('.footer')
footer.style.color = 'green'

let dogDescriptions = document.querySelectorAll('.dog-description')
    for(let i = 0; i < dogDescriptions.length; i++){
        dogDescriptions[i].style.borderStyle = 'dotted'
    }

let column = document.querySelectorAll('.column')
    for(let i = 0; i < column.length; i++){
        column[i].style.borderStyle = 'solid'
    }