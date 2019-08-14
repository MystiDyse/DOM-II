// Instructions! for Task 2
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners] using your creativity to make the Fun Bus site more interactive. 
// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.
// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

// adding event listener ex.
// element.addEventListener('click', callback);
// element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });


let navTAg = document.querySelector('.logo-heading');
navTAg.addEventListener('mouseout', (event) => {
    event.currentTarget.style.color = 'orange'
})

const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('contextmenu', (event) => {
    alert('Hey whatcha Doing!? This is Mine!')
    preventDefault()
})

document.addEventListener('keypress', (event) => {
    if (event.key === 'f') {
        alert('F is for Fun Bus')
    }
})

const sandPit = document.getElementsByClassName("sand")[0]
sandPit.addEventListener('click', (event) => {
    event.target.style.border = 'solid pink 3px'
})

const images = document.getElementsByClassName('img-content');
for (let img of images) {
    img.addEventListener('mouseenter', () => {
        event.target.style.border = 'dashed blue 5px'
    })
}


const fluid = document.querySelector('.text-content');
fluid.addEventListener('dblclick', (event) => {
    event.currentTarget.style.border = 'solid green 3px';
    stopPropogation()
})

const input = document.getElementsByClassName('content-destination')[0];
input.addEventListener('mouseenter', (event) => {
    event.style.backgroundColor = 'grey';
})

const container = document.querySelector('.destination')
container.addEventListener('mouseenter', bkgAndBorder)
function bkgAndBorder(event) {
    event.currentTarget.style.backgroundColor = 'purple';
    event.currentTarget.style.borderColor = 'green';
   }

const buttons = document.querySelectorAll('.btn')
for (let button of buttons) {
	button.addEventListener("click", () => {
		button.style.color = "#17A2B8";
		button.style.backgroundColor = "#FFF";
	});
}
// Collapse



// Message Input


// Message Timothy Shores 


window.addEventListener('resize', (event) =>{
    console.log('window is resizing')
})



