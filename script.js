const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
// Direct visitors to the hosted gallery page.
document.querySelectorAll('a[href="#gallery"]').forEach((link) => { link.href = 'gallery.html'; });
const galleryLink = navigation.querySelector('a[href="gallery.html"]');
if (galleryLink && !navigation.querySelector('a[href="menu.html"]')) {
  const menuLink = document.createElement('a');
  menuLink.href = 'menu.html';
  menuLink.textContent = 'Menu';
  galleryLink.after(menuLink);
}
const headerBrand = document.querySelector('header .brand');
if (headerBrand) {
  headerBrand.innerHTML = '<img src="bajaj-decorators-logo.png" alt="Bajaj Decorators">';
  const logo = headerBrand.querySelector('img');
  logo.style.cssText = 'width:150px;height:auto;max-height:66px;display:block';
}
