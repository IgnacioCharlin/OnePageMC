$(document).ready(function(){ 
    $(".desplegable").click(function(){
      if($('.navegacion').is(":visible")){
          $('.navegacion').slideUp();
      }else{
        $('.navegacion').slideDown();
      }
    });
    $(window).resize(function(){
        if($(this).width()>768){
            $(".navegacion").show();
        } else{
            $(".navegacion").hide();
        }
    });

    $('#form').validate({
        messages : {
            name: {
              required: "",
            },
            email: {
                required: "",
            },
            phone: {
                required: ""
            }
        }
    });
});
