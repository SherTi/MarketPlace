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
            bulletClass: "s-dot",
        }
    });
    const swiper_1 = new Swiper('.swiper_1' ,{
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
            el: "#dots-container_1",
            bulletClass: "s-dot",
        }
    });
    const swiper_2 = new Swiper('.swiper_2' ,{
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
            el: "#dots-container_2",
            bulletClass: "s-dot",
        }
    });
    const swiper_3 = new Swiper('.swiper_3' ,{
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
            el: "#dots-container_3",
            bulletClass: "s-dot",
        }
    });
    const swiper_4 = new Swiper('.swiper_4' ,{
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
            el: "#dots-container_4",
            bulletClass: "s-dot",
        }
    });


})