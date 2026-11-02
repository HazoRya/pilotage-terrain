const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  primaryNav?.classList.toggle('is-open', !isOpen);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

const config = window.PILOTAGE_CONFIG ?? {};
const priceLabel = document.querySelector('#price-label');
const checkoutButton = document.querySelector('[data-checkout]');
const offerCaption = document.querySelector('#offer-caption');

if (config.priceText?.trim()) {
  priceLabel.textContent = config.priceText.trim();
}

if (config.checkoutUrl?.trim()) {
  try {
    const checkout = new URL(config.checkoutUrl.trim());
    if (checkout.protocol === 'https:' || checkout.protocol === 'http:') {
      checkoutButton.href = checkout.href;
      checkoutButton.target = '_blank';
      checkoutButton.rel = 'noopener noreferrer';
      checkoutButton.removeAttribute('aria-disabled');
      checkoutButton.textContent = 'Obtenir le kit ↗';
      offerCaption.textContent = 'Vous serez redirigé vers la page de paiement.';
    }
  } catch {
    // Le bouton reste désactivé tant que le lien n’est pas une URL valide.
  }
}

if (checkoutButton.hasAttribute('aria-disabled')) {
  checkoutButton.addEventListener('click', (event) => event.preventDefault());
}
