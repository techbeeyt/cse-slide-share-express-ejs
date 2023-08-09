const intro = introJs();

intro.oncomplete(() => {
  fetch('/checkpoints/welcome-tour', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => window.location.href = "/");
});
intro.onexit(() => {
  fetch('/checkpoints/welcome-tour', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => window.location.href = "/");
});
intro.start();