// Mobile menu toggle + active nav highlighting + footer year
(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-mobile]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.icon-menu').style.display = open ? 'none' : '';
      toggle.querySelector('.icon-close').style.display = open ? '' : 'none';
    });
  }

  // Active nav link
  const path = window.location.pathname.replace(/\/+$/, '') || '/index.html';
  document.querySelectorAll('[data-nav] a').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const norm = href.replace(/\/+$/, '');
    if (norm === path || (path === '/index.html' && norm === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Footer year
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.innerHTML = `
        <div class="form-success">
          <p class="eyebrow" style="color: var(--accent);">Message received</p>
          <h2>Thank you.</h2>
          <p>I'll be in touch within two business days. In the meantime, the kettle is on.</p>
        </div>`;
    });
  }
})();
