(function () {
  var phone = document.querySelector('.kd-phone[data-screen]');
  if (!phone) return;

  var input = document.querySelector('[data-demo-input]');
  var note = document.querySelector('.kd-demo__for');
  var contact = Array.prototype.slice.call(document.querySelectorAll('a[href="/kontakt"], a[href="/en/contact"]'));
  contact.forEach(function (a) { a.dataset.base = a.getAttribute('href'); });
  var fallback = {
    name: document.querySelector('[data-demo-name]').textContent,
    initials: document.querySelector('[data-demo-initials]').textContent
  };

  function clean(raw) {
    return (raw || '').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
  }

  function initialsOf(name) {
    var words = name.split(' ').filter(function (w) {
      return !/^(dr\.?|med\.?|dent\.?|prof\.?|praxis|practice|für|fur|und|and|am|an|im|in|der|die|das|the|of|&|-)$/i.test(w);
    });
    return words.slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase() || 'P';
  }

  function show(name) {
    document.querySelectorAll('[data-demo-name]').forEach(function (el) { el.textContent = name || fallback.name; });
    document.querySelectorAll('[data-demo-initials]').forEach(function (el) {
      el.textContent = name ? initialsOf(name) : fallback.initials;
    });
    if (note) note.hidden = !name;
    contact.forEach(function (a) {
      a.href = name ? a.dataset.base + '?p=' + encodeURIComponent(name) : a.dataset.base;
    });
  }

  var fromLink = clean(new URLSearchParams(location.search).get('p'));
  if (fromLink) {
    show(fromLink);
    if (input) input.value = fromLink;
  }
  if (input) input.addEventListener('input', function () { show(clean(input.value)); });

  phone.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) phone.dataset.screen = go.dataset.go;
  });
})();
