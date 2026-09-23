const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
button.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.resume-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.resume-tab').forEach(item => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', selected);
  });
  document.querySelectorAll('.resume-panel').forEach(panel => {
    const selected = panel.id === tab.dataset.resumeTarget;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });
}));
