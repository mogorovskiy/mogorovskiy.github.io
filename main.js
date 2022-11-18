let dateSpan = document.getElementById("js-date");

dateSpan.innerHTML = new Date().toJSON().slice(0,10).replace(/-/g,'/');