window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  let currentSection = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navbarLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});
