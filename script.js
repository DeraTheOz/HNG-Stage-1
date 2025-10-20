let userTime = document.querySelector('[data-testid="test-user-time"]');

setInterval(() => {
  userTime.textContent = Date.now();
}, 1000);
