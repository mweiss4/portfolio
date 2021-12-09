var scrollableElement = document.body;
var scrollAmount = 0;
const progressBar = document.querySelector("#progress");
// const mainWindow = document.querySelector("#main");
const target = document.querySelector("#home");


window.addEventListener('scroll', testFunction());
window.addEventListener('scroll', () => {
  if (scrollAmount < 1) {
    scrollableElement.style.overflow = "hidden";
  }
})

window.addEventListener('wheel', function(event) {
  
  if (scrollAmount < 1) {
    if (event.deltaY < 0 && scrollAmount < 1) {
      console.log('scrolling up');
    } else if (event.deltaY > 0 && scrollAmount < 1) {
      console.log('scrolling down');
      scrollAmount += 0.1;
    }
  }
  
});

function testFunction() {
  let id = null;
  const elem = document.getElementById("animate");   
  clearInterval(id);
  id = setInterval(frame, 1000 / 60);
  function frame() {
    if (scrollAmount >= 1) {
      console.log("scrolled");
      scrollAmount = 1;
      scrollableElement.style.overflow = "visible";
      window.scrollTo(0,0);
      target.scrollIntoView({behavior: "smooth"});
      clearInterval(id);
    } else if (scrollAmount < 0.01) {
      scrollAmount = 0;
    } else {  
      scrollAmount -= (0.01 * scrollAmount) + 0.01;
      console.log(scrollAmount);
    }
    progressBar.style.height = (scrollAmount * 50) + "px";
  }
}