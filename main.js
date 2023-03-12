document.addEventListener('DOMContentLoaded' , () => {

    let backedIcon = document.querySelector('.backed-block-icon')
    let backedNav = document.querySelector('.basked_item_block')
    let collapse = document.querySelector('.icon')
    backedIcon.addEventListener('click' , () => {
        backedNav.classList.add('active-nav')
    })
        collapse.addEventListener('click' , () => {
            backedNav.classList.remove('active-nav')
        })
})