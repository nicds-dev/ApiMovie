const checkbox = document.getElementById('preview-theme');
const element = document.getElementById('body-change');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    element.classList.add('dark-mode');
  } else {
    element.classList.remove('dark-mode');
  }
});