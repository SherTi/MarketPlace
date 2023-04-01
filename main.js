document.addEventListener('DOMContentLoaded' , () => {

    let backedIcon = document.querySelector('.backed-block-icon')
    let backedNav = document.querySelector('.basked_item_block')
    let collapse = document.querySelector('.icon')
    backedIcon.addEventListener('click' , () => {
        backedNav.classList.add('active-nav')
    })
        collapse.addEventListener('click' , () => {
            backedNav.classList.remove('active-nav')
        });
    const swiper = new Swiper('.swiper' ,{
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        effect: 'slide',
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        pagination:{
            clickable: true,
            enabled: true,
            type: "bullets",
            bulletActiveClass: "slider-dots-active",
            el: "#dots-container",
            bulletClass: "s-dot"
        }
    });


})