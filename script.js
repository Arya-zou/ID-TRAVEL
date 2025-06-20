function highlightCard(el) {
  const cards = document.querySelectorAll('.tour-card');
  cards.forEach(card => card.style.border = 'none');
  el.style.border = '3px solid var(--orange)';
}
