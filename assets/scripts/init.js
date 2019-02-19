$(document).ready(function() {
    var sliders = $(".lightSlider").lightSlider({
        item:3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        adaptiveHeight: true,
        nextHtml: '<img style="width:110%" src="assets/images/rightArrow.png"/>',
        prevHtml: '<img style="width:110%" src="assets/images/leftArrow.png"/>',
    });

    var accordion = $(".accordion").accordion({
        heightStyle: "content",
        autoHeight: false,
        collapsible: true,
        active: 0,
        activate: function(event, ui) {
            sliders.resize();
        },
    });

    $(".accordion2").accordion({
        heightStyle: "content",
        autoHeight: false,
        collapsible: true,
        active: false,
    });
});