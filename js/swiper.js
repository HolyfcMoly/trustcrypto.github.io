// swiper

const heroSwiper = new Swiper('.hero__slider-swiper', {
    initialSlide: 2,
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
        
    },
    });


const cardSwiper = new Swiper('.card__swiper', {
    initialSlide: 1,
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})




const moreProductSwiper = new Swiper(".product__swiper-karusel", {
    loop: true,
    initialSlide: 2,
    spaceBetween: 17,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    
    
  });
  const productSwiper = new Swiper(".product__swiper", {
    loop: true,
    initialSlide: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: moreProductSwiper,
    },
  });

  const mediaQuery = window.matchMedia("(max-width: 600px)");

  if (mediaQuery.matches) {
    moreProductSwiper.params.spaceBetween = 10;
    moreProductSwiper.update();
  };