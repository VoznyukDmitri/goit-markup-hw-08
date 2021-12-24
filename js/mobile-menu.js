(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuNavRef = document.querySelector('[data-menu-nav]');
  // const menuHedRef = document.querySelector('[data-menu-hed]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('active');
    menuNavRef.classList.toggle('active');
    document.body.classList.toggle('modal-open');
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.setAttribute('aria-expanded', !expanded);
  });
})();
