function collapseHeaderInner() {
  var el = document.querySelector('.header-inner');
  if (el && !document.querySelector('.cinema-layout')) {
    el.style.setProperty('height', '0', 'important');
    el.style.setProperty('min-height', '0', 'important');
    el.style.setProperty('padding', '0', 'important');
  }
}

collapseHeaderInner();

document.addEventListener('DOMContentLoaded', collapseHeaderInner);

var observer = new MutationObserver(collapseHeaderInner);
observer.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['style'] });
