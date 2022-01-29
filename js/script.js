var img = document.getElementById('sol1');
//img.mouseover = function(){ this.src = 'img/sol-hover.jpg'; }
//img.mouseout = function(){ this.src = 'img/sol1.jpg'; }

/*function hover(element) {
    element.setAttribute('src', 'img/sol-hover.jpg');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'img/sol1.jpg');
  }*/

  var elemento = document.getElementById('conta');
  var popup = document.getElementById('popup');

  elemento.addEventListener('mouseenter', () => { popup.style.visibility="visible"; });
  elemento.addEventListener('mouseleave', () => { popup.style.visibility="hidden"; });

  popup.addEventListener('mouseenter', () => { popup.style.visibility="visible"; });
  popup.addEventListener('mouseleave', () => { popup.style.visibility="hidden"; });

  $('input:radio[name="1"]').change(
    () => {
      
    });