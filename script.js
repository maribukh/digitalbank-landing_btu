const navBar = document.getElementById('navBar')
const burgerIcon = document.getElementById('burgerIcon')
const closeIcon = document.getElementById('closeIcon')

burgerIcon.addEventListener('click', () => {
    navBar.style.display = 'flex'
    closeIcon.style.display = 'inline'
    burgerIcon.style.display = 'none'
    navBar.style.animation = 'slideDown 1s'
})

closeIcon.addEventListener('click', () => {
    navBar.style.display = 'none'
    closeIcon.style.display = 'none'
    burgerIcon.style.display = 'inline'
})