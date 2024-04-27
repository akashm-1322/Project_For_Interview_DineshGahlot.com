var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop:true,
    centerSlide:'true',
    fade: 'true',
    grabCursor: 'true',
    dynamicBullets: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });







window.addEventListener('load', function() {
    adjustCarouselHeight();
});

window.addEventListener('resize', function() {
    adjustCarouselHeight();
});

function adjustCarouselHeight() {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var maxHeight = 0;
    carouselItems.forEach(function(item) {
        var height = item.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
    });
    document.getElementById('carouselInner').style.height = maxHeight + 'px';
}