document.addEventListener('DOMContentLoaded', function () {
  const topButton = document.getElementById('top')

  window.addEventListener('scroll', function () {
    // Show the button after scrolling down 300px
    if (window.scrollY > 300) {
      topButton.style.display = 'block'
    } else {
      topButton.style.display = 'none'
    }

    // Check if the user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      topButton.classList.add('enlarged')
    } else {
      topButton.classList.remove('enlarged')
    }
  })

  topButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
