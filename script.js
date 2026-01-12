  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    if (mobileMenu.classList.contains('hidden')) {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    } else {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    }
  });
