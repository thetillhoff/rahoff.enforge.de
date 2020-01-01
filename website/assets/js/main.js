$(document).ready(function () {

    /* --- initialize semantic modules --- */

    //$(".hidden").hide();

    //$('.ui.dropdown').dropdown();
//     $('.ui.dropdown.multiple').dropdown({
//         allowAdditions: true
//     });
//     $('.ui.checkbox.checked').checkbox('check');
//     $('.ui.modal').modal('show');
//     $('.ui.accordion').accordion(
//         'setting', 'exclusive', false
//     );
//     $('.tooltip').popup({
//         transition: 'fade',
//         delay: 0,
//         on: 'focus'
//     });
//     $('.main.menu').visibility({
//         type: 'fixed'
//     });
    //$('.ui.sidebar').sidebar('attach events', '.toc.item');
  
    /* --- initialize other modules --- */

    $( ".ui.tiny.rounded.images > img" ).each(function(index) {
        var thumbimage = $(this);
        $(this).click(function() {
            if ($(this).attr("src") != $(".ui.fluid.rounded.image").attr("src")) {
                $(".ui.fluid.rounded.image").fadeTo(500,0.30, function() {
                    $(".ui.fluid.rounded.image").attr("src",thumbimage.attr("src"));
                }).fadeTo(250,1);
            }
        });
    });    

    /* tests */
  
  
  
    /* --- if all is loaded, we're ready to go --- */
    $(".ui.active.page.dimmer").removeClass('active');
    //$('.cookie.nag').nag('show');
  });