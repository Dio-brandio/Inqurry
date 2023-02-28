$(document).ready(function () {
    $('body').css('padding-left',($('#nav-bar').width()+20)+"px")
    $('#header-toggle').click(function (e) { 
        $('#nav-bar').toggleClass('nav-width');;
    });
});