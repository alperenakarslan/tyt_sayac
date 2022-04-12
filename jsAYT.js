$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('#countDownWrapper')
.countdown('2022/6/19', function(event){
    $('#day').text(event.strftime('%D'));
    $('#hrs').text(event.strftime('%H'));
    $('#min').text(event.strftime('%M'));
    $('#sec').text(event.strftime('%S'));
})