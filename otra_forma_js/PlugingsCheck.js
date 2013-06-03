jQuery(document).ready(function () {
    /*
        Aquí se coloca el nombre de la función
        en este caso se llamará groupCheck
        se coloca la variable checkboxQueManda para recibir como parámetro de nuestra función el check box q realizará la acción los demás
        */
    $.fn.groupCheck = function (checkboxQueManda) {

        /*Dentro de esta funcion, si se utiliza $(this), se está refiriendo a la lista de checkbox y no al checkbox que manda.
        El checkboxquemanda se está mandando como parámetro 
            */
        var checkboxesACambiar = $(this);
        $(checkboxQueManda).on('change', function () { //activamos el evento cuando el checkbox cambia de valor
                       
            var valorDelQueManda = checkboxQueManda.prop('checked'); //Se utiliza .prop porque .attr no reacciona bien con los checkboxes, para referencias, aqui: http://api.jquery.com/prop/#entry-examples
            checkboxesACambiar.prop('checked', valorDelQueManda); //Se marcan todos los checkboxes a cambiar de una sola vez, cambiando su propiedad checked a true

        });
        
        return $(this);
    }
});
