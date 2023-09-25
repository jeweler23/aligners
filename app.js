let popupBg = document.querySelector('.popup-bg')
let popup = document.querySelector('.popup')
let popupBtn = document.querySelectorAll('.popup-btn')
let popupClose = document.querySelectorAll('.popup__image-close')
let popupBtnCall = document.querySelector('.popup-btn__call')
let popupBgCall =document.querySelector('.popup-bg-call')

// console.log(popupClose)
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



//initialization accordion


const accordionContent = document.querySelectorAll('.accordion-content')

accordionContent.forEach((item,index) =>{
    
    item.addEventListener('click', (e)=>{
        let header = item.querySelector('.test-accordion')
        let accordionHidden = item.querySelectorAll('td') 
        let text = item.querySelector('.test-accordion-text')
        let image = item.querySelector('.accordion-image')
        console.log(accordionHidden)
        header.classList.toggle('open')
        if(header.classList.contains('open')){
            header.style.background ='#474A6A'
            text.style.color = '#FFF'
            image.style.transform = "rotate(90deg)";
            accordionHidden.forEach((el) =>{
                el.classList.remove('accordion-hidden')
            })
            
        }
        else{
            header.style.background ='#FFF9F4'
            text.style.color = '#20305B'
            image.style.transform = "rotate(0deg)";
            accordionHidden.forEach((el) =>{
                el.classList.add('accordion-hidden')
            })
        }
    })

})

// function removeOpen(index1){
//     accordionContent.forEach((item2,index2) =>{
//         if(index1 != index2){
//             item2.classList.remove('open')
//             let description = item2.querySelector('.descriprion')
//             description.style.height = '0px'
//             item2.querySelector('i').classList.replace("fa-minus","fa-plus")
//         }
//     })
// }