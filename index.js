
let btnSearch = document.getElementById("inputSearch")
let boxSearsh = document.getElementById("boxSearsh")


btnSearch.onclick = () => {
    boxSearsh.classList.toggle("d-block")
}

let  navbarMenu = document.getElementById("navbarMenu");
let  navbarExit = document.getElementById("navbarExit");
let navItemMobile = document.getElementById("navItemMobile")
navbarMenu.onclick = () => {
    navbarMenu.classList.add("menu-heddin")
    navbarExit.classList.remove("exit")
    navItemMobile.classList.add("nav-mobil")
}
navbarExit.onclick = () => {
    navbarExit.classList.toggle("exit")
    navbarMenu.classList.remove("menu-heddin")
    navItemMobile.classList.remove("nav-mobil")
}


// let test = document.getElementById("test")

// let dropdown = document.getElementById("dropdown")

// test.onclick = () => {
//     dropdown.classList.toggle("dropdown-mobile")
//     dropdown.classList.remove("dropdown")
// }


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".mySwiper-loop", {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        999: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    }

  });




  var swiper = new Swiper(".mySwiper-area", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });