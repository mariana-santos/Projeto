
  // var elemento = document.getElementById('conta');
  // var popup = document.getElementById('popup');

  // elemento.addEventListener('mouseenter', () => { popup.style.visibility="visible"; });
  // elemento.addEventListener('mouseleave', () => { popup.style.visibility="hidden"; });

  // popup.addEventListener('mouseenter', () => { popup.style.visibility="visible"; });
  // popup.addEventListener('mouseleave', () => { popup.style.visibility="hidden"; });

  // $('input:radio[name="1"]').change(
  //   () => {
      
  //   });

  $('#fav-btn').click(() => {
    let currentIcon = $('#like').attr('data-prefix');
    let btn = $('#like');

    if(currentIcon == 'fas')
      btn.attr('data-prefix', 'far')
    else btn.attr('data-prefix', 'fas')
  });

  $(document).ready(()=>{
    $('[data-toggle="popover"]').popover();
  })