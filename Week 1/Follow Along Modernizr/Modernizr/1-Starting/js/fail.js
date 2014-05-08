console.log('Browser does not support the date picker');

$('input[type=date]').datepicker({
    dateFormat:'mm/dd/yy'
});