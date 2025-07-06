let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadshow() {
  let stt = 0;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg) `;
  }
}

loadshow();

const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

const descriptions = ["Deskripsi gambar pertama", "Deskripsi gambar kedua", "Deskripsi gambar ketiga", "Deskripsi gambar keempat", "Deskripsi gambar kelima"];

const descriptionElement = document.querySelector(".carousel__description");

// Mengupdate deskripsi saat mengklik tombol next/prev
const updateDescription = function () {
  descriptionElement.textContent = descriptions[currentIndex];
};

// Panggil updateDescription() setelah memanggil update() pada tombol next/prev

let currentIndex = 0; // Menyimpan posisi aktif saat ini

// Fungsi untuk update posisi kartu
const update = function (direction) {
  // Tentukan posisi baru berdasarkan arah
  currentIndex += direction;

  // Pastikan currentIndex tidak keluar dari batas
  if (currentIndex < 0) {
    currentIndex = elems.length - 1; // Jika sudah di awal, pindah ke akhir
  } else if (currentIndex >= elems.length) {
    currentIndex = 0; // Jika sudah di akhir, pindah ke awal
  }

  const newActive = elems[currentIndex]; // Menentukan item aktif berdasarkan index

  // Update posisi data-pos untuk kartu
  elems.forEach((item, index) => {
    let diff = index - currentIndex;
    item.dataset.pos = diff;
  });
};

// Menambahkan event listener untuk tombol next dan prev
document.querySelector(".carousel-control-prev").addEventListener("click", function () {
  update(-1); // Navigasi ke prev (kiri)
});

document.querySelector(".carousel-control-next").addEventListener("click", function () {
  update(1); // Navigasi ke next (kanan)
});

// Untuk memulai dengan kondisi pertama
update(0);

// Mouse konumunu ve dot/ball pozisyonlarını tutan değişkenler
var mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}; // Başlangıçta mouse pozisyonunu merkeze al
var dotPos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}; // Dot başlangıç pozisyonu
var ballPos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}; // Ball başlangıç pozisyonu

// Hız ayarı için değişken
var speed = 1; // 1 ile 10 arasında bir değer ile hız ayarı yapabilirsiniz

// Dot ve ball elementlerinin hareket oranlarını belirleyen değişkenler
var dotRatio = 0.2 * speed;
var ballRatio = 0.1 * speed;

// DOM'dan dot ve ball elementlerini seç
var dot = document.getElementById("dot");
var ball = document.getElementById("ball");

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");
  const items = document.querySelectorAll(".carousel__item");
  let currentPos = 0;

  // Fungsi untuk mengupdate posisi carousel
  function updateCarousel() {
    items.forEach((item, index) => {
      let pos = (index - currentPos + items.length) % items.length; // Posisi relatif
      item.setAttribute("data-pos", pos - Math.floor(items.length / 2));
    });
  }

  // Fungsi untuk pindah ke item berikutnya
  function nextSlide() {
    currentPos = (currentPos + 1) % items.length;
    updateCarousel();
  }

  // Fungsi untuk pindah ke item sebelumnya
  function prevSlide() {
    currentPos = (currentPos - 1 + items.length) % items.length;
    updateCarousel();
  }

  // Event listener untuk tombol next dan prev
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Inisialisasi posisi carousel
  updateCarousel();
});

function changeTimelinePosition() {
  const percentagePosition = (100 * audio.currentTime) / audio.duration;
  // timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  // timeline.value = percentagePosition;
}

const button = document.querySelector(".click-to-copy");

// Function that runs on click. It:
// 1) Prevents the default behavior of the button (refresh the page);
// 2) Runs the copyToClipboard function;
// 3) Adds and removes some CSS classes, used for styling and notifying the user about the copy event
const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add("is-copied");
  setTimeout(() => {
    e.target.classList.remove("is-copied");
  }, 1200);
};

// Copy to clipboard function, taken from https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript/
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const carouselsList = document.querySelector(".carousels__list");
  const carouselsItems = document.querySelectorAll(".carousels__item");
  const prevButton = document.querySelector(".carousels-control-prev");
  const nextButton = document.querySelector(".carousels-control-next");

  let currentPos = 0;

  // Fungsi untuk memperbarui posisi carousel
  function updateCarousel() {
    carouselsItems.forEach((item, index) => {
      const pos = (index - currentPos + carouselsItems.length) % carouselsItems.length;
      item.style.transform = `translateX(${(pos - 2) * 160}px) scale(${1 - Math.abs(pos - 2) * 0.2})`;
      item.style.opacity = 1 - Math.abs(pos - 2) * 0.3;
      item.setAttribute("data-pos", pos - 2);
    });
  }

  // Fungsi untuk pindah ke item berikutnya
  function nextSlide() {
    currentPos = (currentPos + 1) % carouselsItems.length;
    updateCarousel();
  }

  // Fungsi untuk pindah ke item sebelumnya
  function prevSlide() {
    currentPos = (currentPos - 1 + carouselsItems.length) % carouselsItems.length;
    updateCarousel();
  }

  // Tambahkan event listener untuk tombol
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Inisialisasi posisi carousel
  updateCarousel();
});

// Fire the event on click
button.addEventListener("click", clickToCopy);
