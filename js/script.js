let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parallax").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".home-parallax").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

// SWIPER JS
var swiper = new Swiper(".popular-motors-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".motors-gallery-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// MODAL BOX
document.addEventListener("DOMContentLoaded", function () {
  var motorDetailModal = document.getElementById("motorDetailModal");
  if (motorDetailModal) {
    motorDetailModal.addEventListener("show.bs.modal", function (event) {
      // Tombol yang klik modal
      var button = event.relatedTarget;

      // Ekstrak informasi dari atribut data-*
      var motorName = button.getAttribute("data-motor-name");
      var motorPriceValue = button.getAttribute("data-motor-price-value");
      var motorImage = button.getAttribute("data-motor-image");
      // motorDetailsHtml adalah untuk ringkasan di kartu, kita akan gunakan motorSpecificationsHtml untuk modal
      var motorSpecificationsHtml = button.getAttribute(
        "data-motor-specifications-html"
      );

      // Update konten modal
      var modalTitle = motorDetailModal.querySelector(".modal-title");
      var modalMotorImageEl =
        motorDetailModal.querySelector("#modalMotorImage");
      var modalMotorNameEl = motorDetailModal.querySelector("#modalMotorName");
      var modalMotorPriceSpan = motorDetailModal.querySelector(
        "#modalMotorPrice span"
      );
      var modalMotorDetailsP =
        motorDetailModal.querySelector("#modalMotorDetails");
      var modalMotorDetailsFullDiv = motorDetailModal.querySelector(
        "#modalMotorDetailsFull"
      );

      if (modalTitle) modalTitle.textContent = motorName || "Detail Motor";
      if (modalMotorImageEl)
        modalMotorImageEl.src = motorImage || "assets/icon/logo trans.png";
      if (modalMotorNameEl)
        modalMotorNameEl.textContent = motorName || "Nama Tidak Tersedia";
      if (modalMotorPriceSpan)
        modalMotorPriceSpan.textContent = motorPriceValue || "N/A";

      if (modalMotorDetailsP && modalMotorDetailsFullDiv) {
        if (motorSpecificationsHtml && motorSpecificationsHtml.trim() !== "") {
          modalMotorDetailsP.innerHTML = motorSpecificationsHtml;
          modalMotorDetailsFullDiv.style.display = "block";
        } else {
          modalMotorDetailsP.innerHTML = "Spesifikasi lengkap tidak tersedia.";
          modalMotorDetailsFullDiv.style.display = "block";
        }
      }
    });
  }
});

// FORMSPREE
var form = document.getElementById("contactForm");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contactFormStatus");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Terima kasih! Pesan Anda telah terkirim.";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Oops! Terjadi masalah saat mengirim formulir Anda.";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! Terjadi masalah saat mengirim formulir Anda.";
    });
}
form.addEventListener("submit", handleSubmit);
