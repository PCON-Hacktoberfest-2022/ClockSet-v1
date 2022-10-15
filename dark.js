
let darkMode = localStorage.getItem('darkMode');

// console.log(darkMode)
let darkModeToggle = document.querySelector('#dark-theme-toggler');
// console.log(darkModeToggle)

const enableDarkMode = () =>{
     document.body.classList.add('DarkMode');
     localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () =>{
  document.body.classList.remove('DarkMode');
  localStorage.setItem('darkMode', null);
};

if(darkMode === 'enabled') {
  enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if(darkMode!= 'enabled'){
    enableDarkMode();
  }
  else{
    disableDarkMode();
  }
});