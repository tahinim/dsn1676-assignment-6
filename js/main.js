var $btnShow = $('.btn-show-hide');
var $box = $('.box');

$btnShow.on ('click', function() {
    $box.toggleClass('js-box-show-hide');
});



var $btnmove = $('.btn-move');
var $pink = $('.diamond');

$btnmove.on ('click',function () {
    $pink.toggleClass ('js-diamond-slide');
});



var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-collapse-expand');
});



var $btnbounce = $('.btn-bounce');
var $orange = $('.circle');

$btnbounce.on ('click',function () {
    $orange.addClass ('js-btn-bounce');
});

$orange.on ('animationend', function () {
    $orange.removeClass ('js-btn-bounce');
});