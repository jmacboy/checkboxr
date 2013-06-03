jQuery(document).ready(function () {
    // grouping function
    jQuery.fn.agrupar = function (opcions) {
        //use the event 'change' to change the check
        $('#maestro').change(function () {
            //takes the first element and question if it checked
            if ($("#maestro").is(':checked')) {
                //changes state according to state true or false
                $("INPUT[type='checkbox']").prop('checked', true);
            }
             else {
                   $("INPUT[type='checkbox']").prop('checked',false);
                 }
           };
    return $(this);
});
