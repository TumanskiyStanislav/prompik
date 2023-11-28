//  инициализируем лайтбокс на элементе с классом image-link, когда страница загружена

$(document).ready(function() {
    $('.lightbox_image_link').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      }
    });
});

//slick slider настройки

// $(document).ready(function(){
//   $('.slider_1_container').slick({
//     autoplay: true,
//     autoplaySpeed: 2000, // Время показа каждого слайда в миллисекундах
//     dots: true, // Показывать точки навигации
//     arrows: true // Показывать стрелки навигации
//   });
// });

//slick slider настройки
document.addEventListener('DOMContentLoaded', function() {
  $('.slider_1_container').slick({
      // настройки слайдера
      autoplay: false, // автоматическое проигрывание слайдов
      autoplaySpeed: 8000, // скорость автоматического проигрывания (в миллисекундах)
      arrows: true, // отображение стрелок для навигации по слайдеру
      dots: true, // отображение точек для навигации по слайдеру
      speed: 500, // скорость переключения слайдов (в миллисекундах)
      slidesToShow: 1, // количество слайдов, отображаемых за один раз
      slidesToScroll: 1, // количество слайдов, которые прокручиваются за один раз
      variableWidth: true,
      swipeToSlide: true,
      cssEase: 'linear',
      responsive: [
          {
              breakpoint: 1170,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  variableWidth: true,
                  centerMode: false,
                  // swipeToSlide: false,
                  swipeToSlide: true,
                  cssEase: 'linear',

                  // cssEase: 'ease-in-out',
                  // speed: 800,
                  speed: 100, // уменьшено значение для ускорения перехода
                  // Установка фиксированной ширины слайда
                  // В данном случае, ширина экрана делится на 2, т.к. отображается 2 слайда за раз
                  // Можно поэкспериментировать с этим значением
                  // и установить другое, например 90% ширины экрана
                  // и затем настроить отступы между слайдами через CSS
                  variableWidth: true,
                  slideWidth: $(window).width() / 3
              }
          },
          {
              breakpoint: 700,
              settings: {
                  swipeThreshold: 20,
                  swipeToSlide: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: true,
                  cssEase: 'linear',
                  speed: 100, // уменьшено значение для ускорения перехода
              }
          }
      ],
  });
});
// на первый слайдер на домашней странице ставим картинки стрелочек
$('.slider_1_container').slick({
  prevArrow: '<button type="button" class="slick-prev">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">' +
                      '<circle cx="28.7461" cy="28.7461" r="27.2461" stroke="white" stroke-width="3"/>' +
                      '<path d="M37.1152 29.8822C37.9437 29.8822 38.6152 29.2106 38.6152 28.3822C38.6152 27.5538 37.9437 26.8822 37.1152 26.8822V29.8822ZM17.8609 27.3215C17.2751 27.9073 17.2751 28.8571 17.8609 29.4429L27.4068 38.9888C27.9926 39.5746 28.9423 39.5746 29.5281 38.9888C30.1139 38.403 30.1139 37.4533 29.5281 36.8675L21.0428 28.3822L29.5281 19.8969C30.1139 19.3111 30.1139 18.3614 29.5281 17.7756C28.9423 17.1898 27.9926 17.1898 27.4068 17.7756L17.8609 27.3215ZM37.1152 26.8822L18.9215 26.8822V29.8822L37.1152 29.8822V26.8822Z" fill="white"/>' +
                  '</svg>' +
              '</button>',
  nextArrow: '<button type="button" class="slick-next">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">' +
                      '<circle cx="28.7461" cy="28.7461" r="27.2461" transform="matrix(-1 0 0 1 57.4922 0)" stroke="white" stroke-width="3"/>' +
                      '<path d="M20.377 29.8822C19.5485 29.8822 18.877 29.2106 18.877 28.3822C18.877 27.5538 19.5485 26.8822 20.377 26.8822V29.8822ZM39.6313 27.3215C40.2171 27.9073 40.2171 28.8571 39.6313 29.4429L30.0854 38.9888C29.4996 39.5746 28.5499 39.5746 27.9641 38.9888C27.3783 38.403 27.3783 37.4533 27.9641 36.8675L36.4494 28.3822L27.9641 19.8969C27.3783 19.3111 27.3783 18.3614 27.9641 17.7756C28.5499 17.1898 29.4996 17.1898 30.0854 17.7756L39.6313 27.3215ZM20.377 26.8822L38.5707 26.8822V29.8822L20.377 29.8822V26.8822Z" fill="white"/>' +
                  '</svg>' +
              '</button>',
  dots: true,
  customPaging: function(slider, i) {
    return '<button type="button" data-role="none"></button>';
  }
});

// открытие меню гамбургера
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.menu_hamburger');
    // grayBackgroundHeaderGamburger = document.querySelector('.gray_background_header');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        // grayBackgroundHeaderGamburger.classList.remove('form_hidden');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            // menu.classList.toggle('menu_active'); эта строка должна была убирать мобильное меню гамбургер(оно плавно уезжало), но происходила перезагрузка страницы и на середине уезжания загружалась другая(перезагружалась эта) страница, и выглядело как "дерганье". Убрал, страница и так перезагружается и меню пропадает, не плавно, но без дёрганий
        })
    })
})
