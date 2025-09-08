// router.js
const routes = {
  '/': '<h1>Ana Sayfa</h1><p>Hoşgeldiniz!</p>',
  '/iletisim': '<h1>İletişim</h1><p>Buradan bize ulaşabilirsiniz.</p>',
  '/hakkimizda': '<h1>Hakkımızda</h1><p>Biz kimiz ve ne yapıyoruz?</p>'
};

// Sayfa render fonksiyonu
function render(path) {
  const app = document.getElementById('app');
  app.innerHTML = routes[path] || '<h1>404</h1><p>Sayfa bulunamadı.</p>';
}

// Link tıklamalarını SPA mantığıyla yönlendir
document.querySelectorAll('a[data-link]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const path = new URL(a.href).pathname;
    window.history.pushState({}, '', path);
    render(path);
  });
});

// Browser back/forward tuşlarını dinle
window.addEventListener('popstate', () => render(window.location.pathname));

// Sayfa yüklendiğinde initial render
render(window.location.pathname);
