const items = document.querySelectorAll('.intro-text')
const introImg = document.querySelector('.introImg')
const test = document.querySelector('.test')
const about = document.querySelector('.about')
window.onscroll = () => {
	const offsetY = window.pageYOffset
	const rate = window.pageYOffset * 0.5
	const opacityValue = offsetY / 100

	test.innerHTML = `${offsetY}`

	items[0].style.transform = `translate3D(-${rate}px,0px,0px)`
	items[1].style.transform = `translate3D(${rate * 5}px,0px,0px)`
	items[2].style.transform = `translate3D(-${rate * 3}px,0px,0px)`
	items[3].style.transform = `translate3D(${rate * 7}px,0px,0px)`
	items[4].style.transform = `translate3D(-${rate * 6}px,0px,0px)`

	introImg.style.opacity = `${1 / opacityValue}`
	if (offsetY >= 300) {
		introImg.style.opacity = `${0}`
	}
}
