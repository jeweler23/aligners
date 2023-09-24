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
console.log(accordionContent)
accordionContent.forEach((item,index) =>{

    let header = item.querySelectorAll('.test-accordion')
    
    // console.log(accordionContent)
    header.forEach((item1,index1) =>{
        item1.addEventListener('click',()=>{
            console.log(item1)
            item1.classList.toggle('open')
            let text = item.querySelector('.test-accordion-text')
            let image = document.querySelectorAll('.accordion-image')
            let accordionHidden = document.querySelectorAll('.accordion-hidden') // почему не могу получить из массива accordionContent

            if(item1.classList.contains('open')){

                item1.style.background ='#474A6A'
                text.style.color = '#FFF'
                image[index].style.transform = "rotate(90deg)";
                accordionHidden[index].style.display = 'block'
                
            }
            else{
                // item1.style.height = '0px'
                item1.style.background ='#FFF9F4'
                text.style.color = '#20305B'
                image[index].style.transform = "rotate(0deg)";
                accordionHidden[index].style.display = 'none'
            }

        })
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