 const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');

    // Toggle hamburger to X
    if (!menu.classList.contains('hidden')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });