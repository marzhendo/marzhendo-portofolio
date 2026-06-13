document.addEventListener('DOMContentLoaded', () => {
  let cur = 0;
  const total = 4;
  const slidesEl = document.getElementById('slides');
  const dots = document.querySelectorAll('.pf-dot-ind');
  const counter = document.getElementById('counter');

  function goTo(n) {
    cur = (n + total) % total;
    slidesEl.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    counter.textContent = String(cur + 1).padStart(2, '0') + ' / 0' + total;
  }

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  if (prevBtn) prevBtn.onclick = () => goTo(cur - 1);
  if (nextBtn) nextBtn.onclick = () => goTo(cur + 1);

  dots.forEach(d => {
    d.onclick = () => goTo(parseInt(d.dataset.i));
  });

  // Smooth scroll for anchor CTAs
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
