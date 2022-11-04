
             //  menu
const menuBtn = document.querySelector("#menu-btn");
const close = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

                //  Show Menu
menuBtn.addEventListener("click", (eo) => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  close.style.display = "inline-block";
});
                 //  hidden Menu
const closeNav = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  close.style.display = "none";
}                 
close.addEventListener("click", closeNav) 


    //  cose nav menu when menu a menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("nav ul li a").forEach(navItem => {
     navItem.addEventListener("click", () => {
      closeNav();
     })
  })
}    

                    // change navbar style on Scroll
  window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
  });


  

                      //  swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
              // responsive
const swiperr = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 40
    },
        1263: {
      slidesPerView: 3,
    },
        1024: {
      slidesPerView: 2,
    }
  }
})


      //knight 

const randomHearts = () => {
  const parentHeart = document.createElement("div");
  const containerheart = document.querySelector("#containerheart")
  containerheart.append(parentHeart);

  const createRandomHeart = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💎";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;


    const heart2 = document.createElement("div");
    heart2.classList.add("heart");
    heart2.innerHTML = "💎";
    heart2.style.left = `${Math.random() * 100}%`;
    heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;

    parentHeart.append(heart);
    parentHeart.append(heart2);
  }, 50);

  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 2000);

  setTimeout(() => {
    parentHeart.remove();
  }, 5000);
}




const vatar = document.querySelector("#vatar")
vatar.addEventListener("click", (eo) => {
  randomHearts()
});
      
                        // faqs 
const allPlus = document.querySelectorAll(".plus");

allPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      content.style.height = `   ${content.scrollHeight}px   `;
    } else {
      content.style.height = ` 0  `;
    }

    //  + & -
    item.classList.toggle("hide-plus");
    if (item.classList.contains("hide-plus")) {
      item.innerText = "ــ";
      item.style.transform = "translateY(-11px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0)";
    }
  });
});

       // Digital clock
const digitalClock = () => {
  const now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hours = now.getHours();
  let date = now.toDateString();
  let pmam = "am";

  if (hours > 12) {
    hours = hours - 12;
    pmam = "pm";
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (hours == 0) {
    hours = `12`;
  }

  const clock = `
 

      <div class="date">
        ${date}
      </div>

        <div class="time">

          ${hours} : ${min}  : ${sec}  ${pmam}
        </div>`;

  clockcontainer.innerHTML = clock;
};

setInterval(digitalClock, 1000);



