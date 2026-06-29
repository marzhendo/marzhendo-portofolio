    // Terminal typewriter
    const line = "whoami";
    let i = 0;
    const el = document.getElementById('t-line');
    const sub = document.getElementById('t-sub');
    const cursor = document.getElementById('t-cursor');

    function type() {
      if (i <= line.length) {
        el.textContent = line.slice(0, i++);
        setTimeout(type, i === 1 ? 600 : 65);
      } else {
        setTimeout(() => {
          sub.style.opacity = '1';
        }, 500);
      }
    }
    setTimeout(type, 1000);

    // Smooth scroll for nav links on mobile (fallback)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
