<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="PluginsChechBox.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/jquery-1.9.1.min.js"></script>
    <script src="Scripts/PlugingsCheck.js"></script>
<title>Marcar todos los Checkbox</title>
</head>
<body>
    <form id="form1" runat="server">
		<%-- Los Ids o Names en una página HTML tienen que ser Unicos, usa class --%>
        <input type="checkbox" id="checkboxQueManda"/> Marcar/Desmarcar Todos
        <hr />
        <input type="checkbox" class="checkboxesSeleccionados" value="valor1"/>Valor 1<br/>
        <input type="checkbox" class="checkboxesSeleccionados" value="valor2"/>Valor 2<br/>
        <input type="checkbox" class="checkboxesSeleccionados" value="valor3"/>Valor 3<br/>
        <input type="checkbox" class="checkboxesSeleccionados" value="valor4"/>Valor 4<br/>
    </form>
    <script type="text/javascript">
    	$(document).ready(function () {
    		//Para seleccionar los checkboxes por clase, se coloca lo que se quiere seleccionar entre comillas simples.
			// el "." al comienzo indica que seleccionas por clase, mientras que el "#" al comienzo indica seleccion por ID
    		$('.checkboxesSeleccionados').groupCheck($('#checkboxQueManda'));
        });
    </script>
</body>
</html>
