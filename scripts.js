
document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("homeLink");
  const colorPickerLink = document.getElementById("colorPickerLink");
  const ts0601SensorLink = document.getElementById("ts0601SensorLink");
  const mainFrame = document.getElementById("mainFrame");

  homeLink.addEventListener("click", function(e) {
    e.preventDefault(); 
    mainFrame.src = "home.html"; 
  });

  colorPickerLink.addEventListener("click", function(e) {
    e.preventDefault(); 
    mainFrame.src = "colorpick/index.html";
  });

  ts0601SensorLink.addEventListener("click", function(e) {
    e.preventDefault(); 
    mainFrame.src = "sensor/sensor-info.html"; 
  });
  
  
});

document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const modeLabel = document.getElementById('modeLabel');
  const iframe = document.getElementById('mainFrame');


  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';
  
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
    modeLabel.textContent = 'Dark Mode';
  }

  function sendModeToIframe() {
    if (iframe && iframe.contentWindow) {
      if (document.body.classList.contains('dark-mode')) {
        iframe.contentWindow.postMessage('enable-dark-mode', '*');
      } else {
        iframe.contentWindow.postMessage('disable-dark-mode', '*');
      }
    }
  }

  modeToggle.addEventListener('change', function () {
    if (modeToggle.checked) {
      document.body.classList.add('dark-mode');
      modeLabel.textContent = 'Dark Mode';
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      modeLabel.textContent = 'Light Mode';
      localStorage.setItem('dark-mode', 'disabled');
    }
    sendModeToIframe(); 
  });


  window.addEventListener('message', function (event) {
    if (event.data === 'iframe-ready') {
      sendModeToIframe(); 
    }
  });
});
