// Ambil elemen
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const navLinks = document.querySelectorAll(".navbar-nav a");

// Pastikan elemen ada
if (navbarNav && hamburger) {
  // Klik hamburger menu
  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    navbarNav.classList.toggle("active");
  });

  // Klik di luar menu untuk menutup navbar
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });

  // Klik link navbar agar otomatis tertutup
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbarNav.classList.remove("active");
    });
  });

  // Tekan ESC untuk menutup navbar
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      navbarNav.classList.remove("active");
    }
  });
}

function kirimKeWA(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const wa = document.getElementById("wa").value.trim();

  if (!nama || !wa) {
    alert("Nama dan WhatsApp wajib diisi");
    return;
  }

  const pesan = encodeURIComponent(
    `Halo,

Saya ingin konsultasi produk herbal.

Nama: ${nama}
Email: ${email || "-"}
No WhatsApp: ${wa}`,
  );

  // LANGSUNG KE NOMOR KAMU
  window.location.href = "https://wa.me/6282334543219?text=" + pesan;
}
