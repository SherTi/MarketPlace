document.addEventListener('DOMContentLoaded' , () => {

    let backedIcon = document.querySelector('.backed-block-icon')
    let backedNav = document.querySelector('.backed-block-container')
    backedIcon.addEventListener('click' , (event) =>{
        console.log()
        backedNav.classList.add('active-nav')

    })
})