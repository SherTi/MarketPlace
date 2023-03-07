document.addEventListener('DOMContentLoaded' , () => {

    let backedIcon = document.querySelector('.backed-block-icon')
    let backedNav = document.querySelector('.backed-block')
    backedIcon.addEventListener('click' , (event) =>{
        backedNav.classList.add('active-nav')
    })
})