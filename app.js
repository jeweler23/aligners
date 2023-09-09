let popupBg = document.querySelector('#popup-bg')
let popup = document.querySelector('#popup')
let popupBtn = document.querySelector('.popup-btn')
let popupClose = document.querySelector('.popup__image-close')


// добавляем слушателя к кнопке и класс актив диву popupBg
popupBtn.addEventListener('click',(e) => {
    e.preventDefault();
    popupBg.classList.add('popup-bg__active')
    document.body.style.overflow = 'hidden'
})

// при нажатии на крестик класс удаляем
popupClose.addEventListener('click',function(event){
    popupBg.classList.remove('popup-bg__active')
    document.body.style.overflowY = 'auto'
})

//удаляем класс актив при нажатии на область вне дива попап
document.addEventListener('click', function(event){
    if (event.target===popupBg){
        popupBg.classList.remove('popup-bg__active')
        document.body.style.overflowY = 'auto'
    }
})