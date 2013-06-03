jQuery(document).ready(function () {
    jQuery.fn.agrupar = function (opcions) {
        $('#maestro').change(function () {
            if ($("#maestro").is(':checked')) {
                //cambia estado en caso de que este en otro falso
                $("INPUT[type='checkbox']").prop('checked', true);
            }
    
    };

    jQuery.fn.embellecer = function (opcions) {
        
});
