/* Theme switch: light (original look) or dark (Nexus-AI). Choice is remembered. */
(function () {
  var KEY = 'cy-theme';
  var theme = 'dark';
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);

  function label(btn) {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️' : '🌙';
    var text = isDark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن';
    btn.setAttribute('title', text);
    btn.setAttribute('aria-label', text);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle no-print';
    label(btn);
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label(btn);
    });
    document.body.appendChild(btn);
  });
})();
