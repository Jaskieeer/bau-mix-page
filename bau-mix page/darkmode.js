let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#reset');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  var elem1 = document.getElementById('logo');
  if(elem1)
  {
    elem1.parentNode.removeChild(elem1);
  }
  else
  {
    var elem1 = document.getElementById('delete');
    elem1.parentNode.removeChild(elem1);
  }
  const subject = document.querySelector('#begin');
  subject.insertAdjacentHTML("beforebegin", '<img id="delete" src="file:///C:/Users/jedre/Desktop/SpychalnikPage/pictures/logo_Baumi_dark.png" alt= "logo bau-mix" height="20px" width =auto>');

}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode'); 
  localStorage.setItem('darkMode', 'disabled');
  var elem1 = document.getElementById('delete');
  elem1.parentNode.removeChild(elem1);
const subject = document.querySelector('#begin');
subject.insertAdjacentHTML("beforebegin", '<img id="delete" src="file:///C:/Users/jedre/Desktop/SpychalnikPage/pictures/logo_Baumi.png" alt= "logo bau-mix" height="20px" width =auto>');
}
var clickEvent = new MouseEvent("click", {
  "view": window,
  "bubbles": true,
  "cancelable": false
});

if(darkMode===null){  
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log(`changed to "dark" mode`)
    enableDarkMode();
    darkModeToggle.dispatchEvent(clickEvent);
  }
}
else if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeToggle.dispatchEvent(clickEvent);
}


darkModeToggle.addEventListener('click', () => {

  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

