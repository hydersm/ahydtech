$(document).ready(function() {
    $(".accordion").accordion({
        heightStyle: "content",
        autoHeight: false,
        collapsible: true,
        active: false,
    });
    $(".accordion2").accordion({
        heightStyle: "content",
        autoHeight: false,
        collapsible: true,
        active: false,
    });
    $("#lightSlider").lightSlider({
        item:3,
        loop:true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        auto:true,
        pauseOnHover: true,
    }); 
});