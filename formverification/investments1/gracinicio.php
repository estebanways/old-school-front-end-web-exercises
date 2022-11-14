<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link href="default2.css" rel="stylesheet" type="text/css" />

<style type="text/css">
<!--
body {
	background-color: #161672;
	margin-top: 5px;
	background-image: url(images/bg02.jpg);
	margin-left: 0px;
	margin-right: 0px;
}
body,td,th {
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-size: small;
	color: #CCCCCC;
}
.style5 {
	font-size: 10px;
	color: #FFFFFF;
}
.style10 {
	font-size: 24px;
	color: #FFFFFF;
}
-->
</style>

<div ID="waitDiv" style="position:absolute;left:400px;top:300px;visibility:hidden">
<table cellpadding="6" cellspacing="0" border="1" bgcolor="#000000" bordercolor="#FFFFFF">
<tr><td align=center>
<font color="#ffffff" face="Verdana" class="style5" size="4">Cargando p&aacute;gina...</font>
<img src="http://mx.negocioinversiones.com/realestate/images/cargando.gif" border="1">
</td>
</tr></table>
</div>

<SCRIPT>
<!--
var DHTML = (document.getElementById || document.all || document.layers);
function ap_getObj(name) {
if (document.getElementById)
{ return document.getElementById(name).style; }
else if (document.all)
{ return document.all[name].style; }
else if (document.layers)
{ return document.layers[name]; }
}
function ap_showWaitMessage(div,flag) {
if (!DHTML) return;
var x = ap_getObj(div); x.visibility = (flag) ? 'visible':'hidden'
if(! document.getElementById) if(document.layers) x.left=280/2; return true; } ap_showWaitMessage('waitDiv', 3);
//-->
</SCRIPT>

</head>

<body>

   


 
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>
    <p>
      <?

function hora_local($zona_horaria = 0)
{
	if ($zona_horaria > -12.1 and $zona_horaria < 12.1)
	{
		$hora_local = time() + ($zona_horaria * 3600);
		return $hora_local;
	}
	return 'error';
}

$fecha = gmdate ('m/d/Y ', hora_local(-6));
$campaña="TBBG 5001";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$pais = $_POST['pais'];
$estado = $_POST['estado'];
$ciudad = $_POST['ciudad'];
$telefono = $_POST['telefono'];
$celular = $_POST['celular'];
$edad = $_POST['edad'];
$ocupacion = $_POST['ocupacion'];
$ingreso = $_POST['ingreso'];
$liquidez = $_POST['liquidez'];
$horacontacto = $_POST['horacontacto'];
 
 
require_once('nusoap.php'); 
$wsdl="http://www.swiftthunder.com/servicio/service1.asmx?WSDL";
$client=new soapclient($wsdl); 
$param=array('pClave' => 'SwiftThunderWebServicex4s8tjh','pNombre' => $nombre,'pApellido' => $apellido,'pCampana' => $campaña,'pCorreo' => $email,'pFecha' => $fecha,'pEdad' => $edad,'pEstado' => $estado,'pCiudad' => $ciudad,'pPais' => $pais,'pNTelefono' => $telefono,'pCelular' => $celular,'pOcupacion' => $ocupacion,'pHoraContacto' => $horacontacto,'pIngreso' => $ingreso,'pLiquidez' => $liquidez,); 
$texto = $client->Prospecto($param);
echo "<BR>";
$resultados = print_r ($texto, true);
$resul = substr($resultados,43,3);
if ($resul == "<0>")
{
echo "<p align='center' class='style10'> Gracias $nombre, pronto estaremos en contacto con usted...!";
}
else
{
   if ($resul == "<1>")
   {
   echo "<p align='center' class='style10'> Gracias $nombre, sus datos ya estaban registrados en el sistema...!";
   }
   else
   {
      if ($resul == "<2>")
       {
       echo "<p align='center' class='style10'> Los datos sumistrados por usted no han sido suficientes, revise por favor...";
       }
       else
       {
       echo "<p align='center' class='style10'> Lo siento, hay un problema con tu formulario. Intentalo de nuevo.";
       }
   }
}
	  
 
?>
    </p>
    <p align="center"> <!-- Google Code for tbbg 5001 Conversion Page -->
<script language="JavaScript" type="text/javascript">
<!--
var google_conversion_id = 1050343176;
var google_conversion_language = "es";
var google_conversion_format = "1";
var google_conversion_color = "161672";
if (1) {
  var google_conversion_value = 1;
}
var google_conversion_label = "IbO_CJbdSBCI7uv0Aw";
//-->
</script>
<script language="JavaScript" src="http://www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<img height="1" width="1" border="0" src="http://www.googleadservices.com/pagead/conversion/1050343176/?value=1&amp;label=IbO_CJbdSBCI7uv0Aw&amp;script=0"/>
</noscript>
</p>
  
</body>
  <SCRIPT language=javascript>
<!--
ap_showWaitMessage('waitDiv', 0);
//-->
</SCRIPT>
</html>