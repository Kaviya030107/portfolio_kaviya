// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Shared modal for Projects + Papers
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalView = document.getElementById('modalView');
const modalCode = document.getElementById('modalCode');
const modalClose = document.getElementById('modalClose');

function openModal(title, viewLink, codeLink, label){
  modalTitle.textContent = title;
  modalView.href = viewLink;
  modalView.textContent = label || (codeLink ? 'View Live ↗' : 'View Paper ↗');

  if (codeLink) {
    modalCode.href = codeLink;
    modalCode.style.display = '';
  } else {
    modalCode.style.display = 'none';
  }

  modal.classList.add('open');
}

function closeModal(){
  modal.classList.remove('open');
}

document.querySelectorAll('.tile').forEach(tile => {
  const trigger = () => openModal(
    tile.dataset.title,
    tile.dataset.view,
    tile.dataset.code,
    tile.dataset.label
  );
  tile.addEventListener('click', trigger);
  tile.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trigger();
    }
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
