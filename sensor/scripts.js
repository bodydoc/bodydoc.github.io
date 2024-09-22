function copyCode() {

  const codeBlock = document.getElementById('code-block');
  const codeText = codeBlock.innerText;
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = codeText;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); 
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);

  const notification = document.getElementById('copyNotification');
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}
