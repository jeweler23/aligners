let popupBg = document.querySelector('#popup-bg')
let popup = document.querySelector('#popup')
let popupBtn = document.querySelector('.popup-btn')
let popupClose = document.querySelector('.popup__image-close')


// добавляем класс к попапу
popupBtn.addEventListener('click',(e) => {
    e.preventDefault();
    console.log(popupBg)
    console.log(popupClose)
    popupBg.classList.add('popup-bg__active')
})

// при нажатии на крестик класс удаляем
popupClose.addEventListener('click',function(event){
    popupBg.classList.remove('popup-bg__active')
})

document.addEventListener('click', function(event){
    if (event.target ===popupBg){
        popupBg.classList.remove('popup-bg__active')
    }
})