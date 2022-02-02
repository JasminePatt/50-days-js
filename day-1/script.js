const panels = document.querySelectorAll('.panel')
// Selects all and puts them into a NodeList, like an array and indexes them

// console.log(panels);

panels.forEach((panel) => {
	// console.log(panel)
	panel.addEventListener('click', () => {
		// console.log('you clicked!');
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}