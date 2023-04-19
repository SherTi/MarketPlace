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


    const counters = document.querySelectorAll('[data-counter]')

    if (counters) {
        counters.forEach( counter => {
            counter.addEventListener('click' , e=> {
                const target = e.target;
                if (target.closest('.counter__btn')){
                    let value = parseInt(target.closest('.product-number').querySelector('input').value);
                    let clear_product = document.querySelector('.delete-product');
                    if (target.classList.contains('plus')){
                        value++;
                    }else {
                        --value;
                        if (value <= 1) {
                            value = 1;
                        }
                    }
                    target.closest('.product-number').querySelector('input').value = value;
                }
            })
        })
    }

    document.querySelectorAll('.select_des_btn').forEach((el) => {
        el.addEventListener('click', () => {
            let content = el.nextElementSibling;
            if (content.style.maxHeight) {
                document.querySelectorAll('.select_product_text_des').forEach((el) => el.style.maxHeight = null)
            }else {
                document.querySelectorAll('.select_product_text_des').forEach((el) => el.style.maxHeight = null)
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })


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

    const swiper_select_page = new Swiper('.swiper_5' ,{
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        effect: 'slide',
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        thumbs:{
            swiper:{
                el: '.image-mini-slider',
                slidesPerView:3,
                width:350,
            }
        }
    });
})