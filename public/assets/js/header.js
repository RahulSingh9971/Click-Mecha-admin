const collapseToggles = document.querySelectorAll('.collapse input[type="checkbox"]');
const collapseIcons = document.querySelectorAll('.collapse-icon');
const collapseContents = document.querySelectorAll('.collapse-content');
    
collapseToggles.forEach((toggle, index) => {
toggle.addEventListener('change', () => {
  // Jika checkbox dicentang, rotasi ikon dan tampilkan konten
  if (toggle.checked) {
    collapseIcons[index].classList.add('rotate-180');  // Rotasi ikon 180 derajat
    collapseContents[index].classList.remove('hidden');  // Tampilkan konten
  } else {
    collapseIcons[index].classList.remove('rotate-180');  // Kembalikan rotasi
    collapseContents[index].classList.add('hidden');  // Sembunyikan konten
  }
});
});

  const buttonOfferMobile = document.getElementById('mobileOfferButton');
  const popupOfferMobile = document.getElementById('popupOfferMobile');
  const closeButton = popupOfferMobile.querySelector('.closeButton');

  // Awal sembunyikan popupOffer
  popupOfferMobile.classList.add('hidden');
  // popupRoomMobile.classList.add('hidden');

  // Fungsi untuk menampilkan dan menyembunyikan popup
  const togglePopup = () => {
    if (popupOfferMobile.classList.contains('hidden')) {
      // Tampilkan popup dan animasikan SVG
      popupOfferMobile.classList.remove('hidden', 'animate-fade-slide-down');
      popupOfferMobile.classList.add('animate-fade-slide-up');
    } else {
      // Sembunyikan popup dan animasikan elemen
      popupOfferMobile.classList.remove('animate-fade-slide-up');
      popupOfferMobile.classList.add('animate-fade-slide-down');
      setTimeout(() => {
          popupOfferMobile.classList.add('hidden');
      },300);
    }
  };

  // Event listener untuk tombol offer
  buttonOfferMobile.addEventListener('click', togglePopup);
  // buttonRoomMobile.addEventListener('click', togglePopupR);

  // Event listener untuk tombol close (X)
  closeButton.addEventListener('click', () => {
    popupOfferMobile.classList.remove('animate-fade-slide-up');
    popupOfferMobile.classList.add('animate-fade-slide-down');
    setTimeout(() => {
          popupOfferMobile.classList.add('hidden');
      },300);
  });
