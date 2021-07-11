$(function()  {
  $('[data-bs-toggle="tooltip"]').tooltip();
   });

   (document).ready(function() {
        $("a").on('click', function(event) {
          behavior
          if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 400, function() {

              window.location.hash = hash;
            });
          }
        });
      });
