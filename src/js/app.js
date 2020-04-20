// import '../scss/style.scss';

window.onload = function() {
  lax.setup()
  const update = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(update)
  }
  window.requestAnimationFrame(update)
  window.addEventListener("scroll", function() {
    lax.updateElements()
  });
}