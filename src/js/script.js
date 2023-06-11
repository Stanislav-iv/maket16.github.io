export const myVariable = 'Block7'

let swiper = new Swiper('.swiper', {
  Loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  slidesPerView: 'auto',
  slidesOffsetBefore: 5,
  spaceBetween: 16
})
let screen = window.matchMedia('(max-width: 767px)')
// if (!screen.matches) {
//   swiper.destroy()
// }
let btnMore = document.querySelector('.btn__more')
let brandLength = document.querySelectorAll('.brand__button').length
btnMore.addEventListener('click', () => {
  if (btnMore.textContent != 'Скрыть') {
    // btnMore.classList.toggle("opened");
    btnMore.textContent = 'Скрыть'
    let array = Array.from(
      document.querySelector('.brand__Navigation').children
    )
    let visItems = array.slice(0, brandLength)
    visItems.forEach((el) => el.classList.add('is-visible'))
  } else {
    // btnMore.classList.toggle("closed");
    btnMore.textContent = 'Показать еще'
    let array = Array.from(
      document.querySelector('.brand__Navigation').children
    )
    let visItems = array.slice(0, brandLength)
    visItems.forEach((el) => el.classList.remove('is-visible'))
  }
})

let serMore = document.querySelector('.serviceBtn__more')
let serLength = document.querySelectorAll('.service__button').length
serMore.addEventListener('click', () => {
  if (serMore.textContent != 'Скрыть') {
    // btnMore.classList.toggle("opened");
    serMore.textContent = 'Скрыть'
    let array = Array.from(
      document.querySelector('.service__Navigation').children
    )
    let visItems = array.slice(0, serLength)
    visItems.forEach((el) => el.classList.add('is-visible'))
  } else {
    // btnMore.classList.toggle("closed");
    serMore.textContent = 'Показать еще'
    let array = Array.from(
      document.querySelector('.service__Navigation').children
    )
    let visItems = array.slice(0, serLength)
    visItems.forEach((el) => el.classList.remove('is-visible'))
  }
})

// side-box

document.getElementById('intro_btn').onclick = function () {
  document.getElementById('main').classList.add('open__Side', 'open__Side1')
  document.getElementById('mask').classList.add('mask__Side')
  document.getElementById('closeSide').classList.add('Close__main')
}
document.getElementById('close').onclick = function () {
  document.getElementById('main').classList.remove('open__Side', 'open__Side1')
  document.getElementById('mask').classList.remove('mask__Side')
  document.getElementById('closeSide').classList.remove('Close__main')
}
document.getElementById('mask').onclick = function () {
  document.getElementById('main').classList.remove('open__Side', 'open__Side1')
  document.getElementById('mask').classList.remove('mask__Side')
  document.getElementById('closeSide').classList.remove('Close__main')
}
// обратная связь
document.getElementById('chat').onclick = function () {
  document
    .getElementById('mainRever')
    .classList.add('open__Rever', 'open__Rever1')
  document.getElementById('maskRever').classList.add('mask__Side')
  document.getElementById('main').classList.remove('open__Side', 'open__Side1')
  document.getElementById('mask').classList.remove('mask__Side')
  document.getElementById('closeSide').classList.add('Close__main')
}
document.getElementById('closeRever').onclick = function () {
  document
    .getElementById('mainRever')
    .classList.remove('open__Rever', 'open__Rever1')
  document.getElementById('maskRever').classList.remove('mask__Side')
  document.getElementById('main').classList.add('open__Side', 'open__Side1')
  document.getElementById('mask').classList.add('mask__Side')
}
document.getElementById('maskRever').onclick = function () {
  document
    .getElementById('mainRever')
    .classList.remove('open__Rever', 'open__Rever1')
  document.getElementById('maskRever').classList.remove('mask__Side')
  document.getElementById('main').classList.add('open__Side', 'open__Side1')
  document.getElementById('mask').classList.add('mask__Side')
}
// call
document.getElementById('call').onclick = function () {
  document.getElementById('mainCall').classList.add('open__Call', 'open__Call1')
  document.getElementById('maskCall').classList.add('mask__Side')
  document.getElementById('main').classList.remove('open__Side', 'open__Side1')
  document.getElementById('mask').classList.remove('mask__Side')
  document.getElementById('closeSide').classList.add('Close__main')
}
document.getElementById('closeCall').onclick = function () {
  document
    .getElementById('mainCall')
    .classList.remove('open__Call', 'open__Call1')
  document.getElementById('maskCall').classList.remove('mask__Side')
  document.getElementById('main').classList.add('open__Side', 'open__Side1')
  document.getElementById('mask').classList.add('mask__Side')
}
document.getElementById('maskCall').onclick = function () {
  document
    .getElementById('mainCall')
    .classList.remove('open__Call', 'open__Call1')
  document.getElementById('maskCall').classList.remove('mask__Side')
  document.getElementById('main').classList.add('open__Side', 'open__Side1')
  document.getElementById('mask').classList.add('mask__Side')
}
