document.addEventListener('DOMContentLoaded', () => {
  /* LOADER */
  const loaderScreen = document.querySelector('.loaderScreen')
  // setTimeout(() => {
  //   loaderScreen.classList.add('loaderScreen--Hidden')
  // }, 500)

  /* NAVIGATION */
  const pages = document.querySelectorAll('.page')

  function hideAllPages() {
    pages.forEach(page => {
      page.classList.add('pageHidden')
    })
  }

  const navButtons = document.querySelectorAll('[data-navigation]')
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const clickedBtn = btn.getAttribute('data-navigation')
      const pageToNavigate = document.querySelector(`[data-page=${clickedBtn}]`)

      hideAllPages()
      pageToNavigate.classList.remove('pageHidden')
    })
  })

  /* HOMER */
  const homerBox = document.querySelector('.homer')
  const homerImg = homerBox.querySelector('img')

  homerBox.addEventListener('touchstart', e => {
    homerImg.style.opacity = 0.5
    homerImg.style.transform = 'scale(0.95)'
    setTimeout(() => {
      homerImg.setAttribute('src', 'assets/components/homer/img/2.png')
      homerImg.style.opacity = 1
    }, 100)
  })

  homerBox.addEventListener('touchend', e => {
    homerImg.style.opacity = 0.5
    homerImg.style.transform = 'scale(1)'
    setTimeout(() => {
      homerImg.setAttribute('src', 'assets/components/homer/img/1.png')
      homerImg.style.opacity = 1
    }, 100)
  })

  homerBox.addEventListener('touchstart', e => {
    const textElement = document.createElement("div");
    textElement.textContent = "27";

    textElement.style.position = 'absolute'
    textElement.style.left = e.touches[0].pageX + "px";
    textElement.style.top = e.touches[0].pageY + "px";
    textElement.style.opacity = 1;
    textElement.style.transition = "opacity 1s";
    textElement.style.animation = "moveUp 2s forwards";
    textElement.style.fontSize = '32px'
    textElement.style.fontWeight = 700
    textElement.style.color = 'white'
    textElement.style.textShadow = '0px 1px 1px rgba(28, 55, 88, 0.2)'
    textElement.style.pointerEvents = 'none'


    // Добавляем элемент в DOM
    document.body.appendChild(textElement);

    // Плавное исчезание через 1.5 секунды
    setTimeout(function() {
      textElement.style.opacity = 0;
    }, 300);

    // Удаляем элемент из DOM после завершения анимации
    textElement.addEventListener("transitionend", function() {
      textElement.parentNode.removeChild(textElement);
    });
  })
})
