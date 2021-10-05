



/*-----------------------SCROLL SECTION ACTIVE LINK---------------------------------*/
// Lấy ra các thẻ section chứa ID
const getSections = document.querySelectorAll('section[id]')
// Tạo hàm
function scrollActive() {
    // Gán giá trị kéo từ trên xuống theo trục Y/ pageYOffset pageXOffset
    const scrollY = window.pageYOffset;
    // Begin forEach
    getSections.forEach(function (item) {
        // offsetHeight : đo chiều cao phần tử
        const sectionHeigth = item.offsetHeight;
        // offsetTop : Khoảng cách từ top đến phần tử 
        const sectionTop = item.offsetTop - 50;
        // Lấy ra id sau mỗi lần lặp
        getSection_id = item.id;
        // Lấy ra class có Href = id phần tử đang lặp
        const getCurrent_section = document.querySelector(`.nav__menu a[href*= ${getSection_id}]`)
        // Đoạn đường kéo > độ dài của phần tử - 50px và <= độ dài phần tử + khoảng cách từ phần tử đến Top
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth) {
            getCurrent_section.classList.add('active-link')
        }
        else {
            getCurrent_section.classList.remove('active-link')
        }
    })
    // End forEach
}
// Sự kiện kéo thanh scroll, tham số truyền vào là 1 function
window.addEventListener('scroll', scrollActive)

/*-----------------------SCROLL CHANGE BACKGROUND HEADER---------------------------------*/
// const scrollY = window.pageYOffset;
function scrollHeader() {
    const getHeader = document.querySelector('#header')
    if (this.scrollY >= 100) {
        getHeader.classList.add('scroll-header')
    }
    else {
        getHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

// OnTop
function scrollTop(){
    const getOnTop=document.querySelector(".scroll__top")
    if(this.scrollY>=200){
        getOnTop.classList.add('scroll__top--avtive')
    }
    else{
        getOnTop.classList.remove('scroll__top--avtive')
    }
}
window.addEventListener('scroll',scrollTop)

/*--------------------------------- Swiperjs--------------------------------------------- */

var swiper = new Swiper(".portfolio__content", {
    // slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
    breakpoints: {
        360:{
            slidesPerView: 1,
            
           
        },
    500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
   
    },
  });