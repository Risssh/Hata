var tSwitcher = document.getElementById('theme-switcher');
let element = document.body;

let onpageLoad = localStorage.getItem("theme") || "";
if(onpageLoad != null && onpageLoad  == 'on'){
  tSwitcher.checked = true;
} 
element.classList.add(onpageLoad);


function themeToggle(){
  if(tSwitcher.checked){
      localStorage.setItem('theme', 'on');
        element.classList.add('on');
    } else {
      localStorage.setItem('theme', '');
        element.classList.remove('on');
    }
}