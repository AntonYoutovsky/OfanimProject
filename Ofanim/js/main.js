
$(document).ready(function () {

    $(".container.mt-3.mb-5.text-center").find(".collapse-item").on('click', function () {

        if ($(this).find(".collapse").hasClass("show")) {
            $(this).find(".vBtn").css("animation", "open 0.2s");
            $(this).find(".vBtn").css("transform", "rotate(90deg)")
        }
        else {
            $(this).find(".vBtn").css("transform", "rotate(0deg)");
            $(this).find(".vBtn").css("animation", "close 0.2s");
        }
    });
    $(".dimg").map(function () {
        $(this).wrap('<a href="' + $(this).children().attr('src') + '"  download="' + $(this).children().attr('src') + '"  />')
        //$(this).on('click', function () {
         //   console.log($(this).children().attr('src'))
        //    $(this).children().wrap('<a href="' + $(this).children().attr('src') + '" download />')
        //}
        
        //)
    });
    
});