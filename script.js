let count = 0;

const waarde = document.querySelector('.waarde');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('min')) {
      count--;
    }
    else if (styles.contains('plus')) {
      count++;
    }
    else {
      count = 0
    }
    if (count > 0) {
      waarde.style.color = "green";
    }
    if (count < 0) {
      waarde.style.color = "red";
    }
    if (count === 0) {
      waarde.style.color = "#00203FFF";
    }
    waarde.textContent = count;
  })
})
