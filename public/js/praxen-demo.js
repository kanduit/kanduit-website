(function () {
  var phone = document.querySelector('.kd-phone[data-screen]');
  if (!phone) return;

  var raw = new URLSearchParams(location.search).get('p') || '';
  var name = raw.replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);

  if (name) {
    document.querySelectorAll('[data-demo-name]').forEach(function (el) { el.textContent = name; });
    var words = name.split(' ').filter(function (w) {
      return !/^(dr\.?|med\.?|dent\.?|prof\.?|praxis|für|fur|und|&|-)$/i.test(w);
    });
    var initials = words.slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase();
    document.querySelectorAll('[data-demo-initials]').forEach(function (el) { el.textContent = initials || 'P'; });
    var note = document.querySelector('.kd-demo__for');
    if (note) note.hidden = false;
    document.querySelectorAll('a[href="/kontakt"]').forEach(function (a) {
      a.href = '/kontakt?p=' + encodeURIComponent(name);
    });
  }

  phone.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) phone.dataset.screen = go.dataset.go;
  });
})();
