let popupBg = document.querySelector('.popup-bg')
let popup = document.querySelector('.popup')
let popupBtn = document.querySelectorAll('.popup-btn')
let popupClose = document.querySelectorAll('.popup__image-close')
let popupBtnCall = document.querySelector('.popup-btn__call')
let popupBgCall =document.querySelector('.popup-bg-call')

console.log(popupClose)
// добавляем слушателя к кнопке и класс актив диву popupBgh

// document.body.addEventListener('click',(e)=>{
//     if (e.target.classList.contains('popup-btn')){
//         e.preventDefault();
//         console.log(popupBtn)
//         popupBg.classList.add('popup-bg__active')
//         document.body.style.overflow = 'hidden'
//     }
// })
// popupBtn.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log(popupBtn)
//     popupBg.classList.add('popup-bg__active')
//     document.body.style.overflow = 'hidden'
// })

popupBtn.forEach(function(item){
    item.addEventListener('click',function(event){
        popupBg.classList.add('popup-bg__active')
    })
})

// при нажатии на крестик класс удаляем

popupClose.forEach(function(btn){
    btn.addEventListener('click',function(event){
        popupBg.classList.remove('popup-bg__active')
        popupBgCall.classList.remove('popup-bg-call__active')
        document.body.style.overflowY = 'auto'
    })

})
// popupClose.addEventListener('click',function(event){
//     popupBg.classList.remove('popup-bg__active')
//     popupBgCall.classList.remove('popup-bg-call__active')
//     document.body.style.overflowY = 'auto'
// })

//удаляем класс актив при нажатии на область вне дива попап
document.addEventListener('click', function(event){
    if (event.target===popupBg || event.target === popupBgCall){
        popupBg.classList.remove('popup-bg__active')
        popupBgCall.classList.remove('popup-bg-call__active')
        document.body.style.overflowY = 'auto'
    }
})

popupBtnCall.addEventListener('click', function(event){
    popupBgCall.classList.add('popup-bg-call__active')
    document.body.style.overflowY = "hidden";
})