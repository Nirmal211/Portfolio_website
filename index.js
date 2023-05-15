const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_ele = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click' , (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    // first we remove class form all
    p_btn.forEach((curElement) => { curElement.classList.remove("p-btn-active")});

    // then then there will be class add in which we will click.
    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attribute
    const btn_number = p_btn_clicked.dataset.btnNum; // to get the data we use dataset attr.
    console.log(btn_number)


    const img_active = document.querySelectorAll(`.p-btn--${btn_number}`);

    p_img_ele.forEach((curElement) => { curElement.classList.add("p-image-not-active")})

    img_active.forEach((curElement) => {curElement.classList.remove("p-image-not-active")})

})

// Swiper js code --->

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      autoplay:{
       delay:2500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

