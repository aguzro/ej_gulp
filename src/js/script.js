$(document).ready(function () {
  /*CUSTOM LINKS SCROLLING FUNCTION */
  // CAROUSEL FUNCTION 
  $('.carousel').carousel({
    interval: 2000 //TIME IN MILLI SECONDS
  });

  /* esconde los campos */
  $('#figura').on('change', function(ef) {
    // valor del select
    var valor = $(this).val();

    if (valor == 'esfera') {
      $('#radio').removeClass('hide');
      $('#ancho').addClass('hide');
      $('#largo').addClass('hide');
      $('#altura').addClass('hide');
    } else if (valor == 'cubo') {
      $('#radio').addClass('hide');
      $('#ancho').removeClass('hide');
      $('#largo').removeClass('hide');
      $('#altura').removeClass('hide');
    } else if (valor == 'piramide') {
      $('#radio').addClass('hide');
      $('#ancho').removeClass('hide');
      $('#largo').removeClass('hide');
      $('#altura').removeClass('hide');
    }
  });

  /* formulario que calcula volumen de la figura */
  $('#form-figura').on('submit', function(e) {
    e.preventDefault();
    console.log('calculado');
  });
});

