// Navbar dropdown on mobile
let menuNav = document.querySelector('.menu-nav')
let navBarToggle = document.querySelector('.icon')

navBarToggle.addEventListener('click', () => {
  menuNav.classList.toggle('active')
})

ScrollReveal().reveal('header', { duration: 1000, distance: '50px' })
ScrollReveal().reveal('.hero', {
  delay: 500,
  duration: 1500,
})
ScrollReveal().reveal('.content', {
  delay: 500,
  duration: 1500,
})
ScrollReveal().reveal('aside', {
  delay: 1000,
  duration: 1500,
  origin: 'top',
  distance: '200px',
})
ScrollReveal().reveal('footer', {
  delay: 1000,
  duration: 1500,
})
ScrollReveal().reveal('.interval', {
  interval: 1000,
  easing: 'ease-in-out',
  origin: 'left',
  distance: '200px',
})
ScrollReveal().reveal('.interval-fast', {
  interval: 200,
})
