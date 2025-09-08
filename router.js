const routes = {
  '/': '<h1>Ana Sayfa</h1>',
  '/projeler': '<h1>Projeler</h1>',
  '/makaleler': '<h1>Makaleler</h1>',
  '/hakkimda': '<h1>Hakkımda</h1>',
  '/iletisim': '<h1>İletişim</h1>'
};

function render(path) {
  const app = document.getElementById('app');
  app.innerHTML = routes[path] || '<h1>404</h1>';
}

document.querySelectorAll('a[data-link]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const path = a.getAttribute('href').replace('#', '') || '/';
    window.location.hash = path;
    render(path);
  });
});

window.addEventListener('hashchange', () => {
  render(window.location.hash.replace('#', '') || '/');
});

render(window.location.hash.replace('#', '') || '/');
