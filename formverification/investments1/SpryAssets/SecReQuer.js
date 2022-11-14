// ---------------------------------------------------------------------- //
//           FormCheq.js (c) ChaTo@usa.net, simplificacion/traduccion     //
//              para Tejedores del Web http://www.dic.uchile.cl/~manual/  //
//              FormChek.js (c) Eric Krock (c) 1997 Netscape              //
// ---------------------------------------------------------------------- //
// Rutinas para verificacion de formularios, basado en FormChek.js
// 18 Feb 97 creado por Eric Krock (c) 1997
//   Netscape Communications Corporation
// 18 Aug 98 modificado por Carlos Castillo (c) 1998 ChaTo
//   Los principales cambios son: esta version es simplificada, para
//   propositos de ensennanza y validacion basica de formularios, y esta
//   adaptada para recibir caracteres del alfabeto espannol (acentos, etc.)
// 
// ---------------------------------------------------------------------- //
//                             RESUMEN                                    //
// ---------------------------------------------------------------------- //
// 
// El objetivo de las siguientes funciones en JavaScript es
// validar los ingresos del usuario en un formulario antes
// de que estos datos vayan al servidor.
//
// Varias de ellas toman un parametro opcional E.O.K (eok) (emptyOK
// - true si se acepta que el valor este vacio, false si no
// se acepta). El valor por omision es el que indique la
// variable global defaultEmptyOK definida mas abajo.
//
// ---------------------------------------------------------------------- //
//                      SINTAXIS DE LAS FUNCIONES                         //
// ---------------------------------------------------------------------- //
//
// FUNCION PARA CHEQUEAR UN CAMPO DE INGRESO:
//
// checkField (theField, theFunction, [, s] [,eok])
//        verifica que el campo de ingreso theField cumpla con la
//        condicion indicada en la funcion theFunction (que puede ser
//        una de las descritas en "FUNCIONES DE VALIDACION" o cualquier
//        otra provista por el usuario). En caso contrario despliega el
//        string "s" (opcional, hay mensajes por default para las
//        funciones de validacion provistas aqui).
//
// FUNCIONES DE VALIDACION:
//
// isInteger (s [,eok])                s representa un entero
// isNumber (s [,eok])                 s es entero o tiene punto decimal
// isAlphabetic (s [,eok])             s tiene solo letras
// isAlphanumeric (s [,eok])           s tiene solo letras y/o numeros
// isPhoneNumber (s [,eok])            s tiene solo numeros, (,),-
// isEmail (s [,eok])                  s es una direccion de e-mail
//
// FUNCIONES INTERNAS:
//
// isWhitespace (s)                    s es vacio o solo son espacios
// isLetter (c)                        c es una letra
// isDigit (c)                         c es un digito
// isLetterOrDigit (c)                 c es letra o digito
//
// FUNCIONES PARA REFORMATEAR DATOS:
//
// stripCharsInBag (s, bag)            quita de s los caracteres en bag
// stripCharsNotInBag (s, bag)         quita de s los caracteres NO en bag
// stripWhitespace (s)                 quita el espacio dentro de s
// stripInitialWhitespace (s)          quita el espacio al principio de s
//
// FUNCIONES PARA PREGUNTARLE AL USUARIO:
//
// statBar (s)                         pone s en la barra de estado
// warnEmpty (theField, s)             indica que theField esta vacio
// warnInvalid (theField, s)           indica que theField es invalido
//
// ---------------------------------------------------------------------- //
//                                VARIABLES                               //
// ---------------------------------------------------------------------- //

// Esta variable indica si está bien dejar las casillas
// en blanco como regla general
var defaultEmptyOK = false

// listas de caracteres
var digits = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyzáéíóúñü"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÑ"
var whitespace = " \t\n\r";

// caracteres admitidos en nos de telefono
var phoneChars = "()-+ ";

// ---------------------------------------------------------------------- //
//                     TEXTOS PARA LOS MENSAJES                           //
// ---------------------------------------------------------------------- //

// m abrevia "missing" (faltante)
var mMessage = "Error: no puede dejar este espacio vacio"

// p abrevia "prompt"
var pPrompt = "Error: ";
var pAlphanumeric = "ingrese un texto que contenga solo letras y/o numeros";
var pAlphabetic   = "ingrese un texto que contenga solo letras";
var pInteger = "ingrese un numero entero";
var pNumber = "ingrese un numero";
var pPhoneNumber = "ingrese un número de teléfono";
var pEmail = "ingrese una dirección de correo electrónico válida";
var pName = "ingrese un texto que contenga solo letras, numeros o espacios";

// ---------------------------------------------------------------------- //
//                FUNCIONES PARA MANEJO DE ARREGLOS                       //
// ---------------------------------------------------------------------- //

// JavaScript 1.0 (Netscape 2.0) no tenia un constructor para arreglos,
// asi que ellos tenian que ser hechos a mano. Desde JavaScript 1.1 
// (Netscape 3.0) en adelante, las funciones de manejo de arreglos no
// son necesarias.

function makeArray(n) {
//*** BUG: If I put this line in, I get two error messages:
//(1) Window.length can't be set by assignment
//(2) daysInMonth has no property indexed by 4
//If I leave it out, the code works fine.
//   this.length = n;
   for (var i = 1; i <= n; i++) {
      this[i] = 0
   } 
   return this
}

// ---------------------------------------------------------------------- //
//                  CODIGO PARA FUNCIONES BASICAS                         //
// ---------------------------------------------------------------------- //


// s es vacio
function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

// s es vacio o solo caracteres de espacio
function isWhitespace (s)
{   var i;
    if (isEmpty(s)) return true;
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        // si el caracter en que estoy no aparece en whitespace,
        // entonces retornar falso
        if (whitespace.indexOf(c) == -1) return false;
    }
    return true;
}

// Quita todos los caracteres que que estan en "bag" del string "s" s.
function stripCharsInBag (s, bag)
{   var i;
    var returnString = "";

    // Buscar por el string, si el caracter no esta en "bag", 
    // agregarlo a returnString
    
    for (i = 0; i < s.length; i++)
    {   var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}

// Lo contrario, quitar todos los caracteres que no estan en "bag" de "s"
function stripCharsNotInBag (s, bag)
{   var i;
    var returnString = "";
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}

// Quitar todos los espacios en blanco de un string
function stripWhitespace (s)
{   return stripCharsInBag (s, whitespace)
}

// La rutina siguiente es para cubrir un bug en Netscape
// 2.0.2 - seria mejor usar indexOf, pero si se hace
// asi stripInitialWhitespace() no funcionaria

function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}

// Quita todos los espacios que antecedan al string
function stripInitialWhitespace (s)
{   var i = 0;
    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;
    return s.substring (i, s.length);
}

// c es una letra del alfabeto espanol
function isLetter (c)
{
    return( ( uppercaseLetters.indexOf( c ) != -1 ) ||
            ( lowercaseLetters.indexOf( c ) != -1 ) )
}

// c es un digito
function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}

// c es letra o digito
function isLetterOrDigit (c)
{   return (isLetter(c) || isDigit(c))
}

// ---------------------------------------------------------------------- //
//                          NUMEROS                                       //
// ---------------------------------------------------------------------- //

// s es un numero entero (con o sin signo)
function isInteger (s)
{   var i;
    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);
    
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if( i != 0 ) {
            if (!isDigit(c)) return false;
        } else { 
            if (!isDigit(c) && (c != "-") || (c == "+")) return false;
        }
    }
    return true;
}

// s es un numero (entero o flotante, con o sin signo)
function isNumber (s)
{   var i;
    var dotAppeared;
    dotAppeared = false;
    if (isEmpty(s)) 
       if (isNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isNumber.arguments[1] == true);
    
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if( i != 0 ) {
            if ( c == "." ) {
                if( !dotAppeared )
                    dotAppeared = true;
                else
                    return false;
            } else     
                if (!isDigit(c)) return false;
        } else { 
            if ( c == "." ) {
                if( !dotAppeared )
                    dotAppeared = true;
                else
                    return false;
            } else     
                if (!isDigit(c) && (c != "-") || (c == "+")) return false;
        }
    }
    return true;
}

// ---------------------------------------------------------------------- //
//                        STRINGS SIMPLES                                 //
// ---------------------------------------------------------------------- //

// s tiene solo letras
function isAlphabetic (s)
{   var i;

    if (isEmpty(s)) 
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is letter.
        var c = s.charAt(i);

        if (!isLetter(c))
        return false;
    }
    return true;
}


// s tiene solo letras y numeros
function isAlphanumeric (s)
{   var i;

    if (isEmpty(s)) 
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }

    return true;
}

// s tiene solo letras, numeros o espacios en blanco
function isName (s)
{
    if (isEmpty(s)) 
       if (isName.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);
    
    return( isAlphanumeric( stripCharsInBag( s, whitespace ) ) );
}

// ---------------------------------------------------------------------- //
//                           FONO o EMAIL                                 //
// ---------------------------------------------------------------------- //

// s es numero de telefono valido
function isPhoneNumber (s)
{   var modString;
    if (isEmpty(s)) 
       if (isPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isPhoneNumber.arguments[1] == true);
    modString = stripCharsInBag( s, phoneChars );
    return (isInteger(modString))
}

// s es una direccion de correo valida
function isEmail (s)
{
    if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
    if (isWhitespace(s)) return false;
    var i = 1;
    var sLength = s.length;
    while ((i < sLength) && (s.charAt(i) != "@"))
    { i++
    }

    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
    else i += 2;

    while ((i < sLength) && (s.charAt(i) != "."))
    { i++
    }

    if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
    else return true;
}

// ---------------------------------------------------------------------- //
//                  FUNCIONES PARA RECLAMARLE AL USUARIO                  //
// ---------------------------------------------------------------------- //

// pone el string s en la barra de estado
function statBar (s)
{   window.status = s
}

// notificar que el campo theField esta vacio
function warnEmpty (theField)
{   theField.focus()
    alert(mMessage)
    statBar(mMessage)
    return false
}

// notificar que el campo theField es invalido
function warnInvalid (theField, s)
{   theField.focus()
    theField.select()
    alert(s)
    statBar(pPrompt + s)
    return false
}

// el corazon de todo: checkField
function checkField (theField, theFunction, emptyOK, s)
{   
    var msg;
    if (checkField.arguments.length < 3) emptyOK = defaultEmptyOK;
    if (checkField.arguments.length == 4) {
        msg = s;
    } else {
        if( theFunction == isAlphabetic ) msg = pAlphabetic;
        if( theFunction == isAlphanumeric ) msg = pAlphanumeric;
        if( theFunction == isInteger ) msg = pInteger;
        if( theFunction == isNumber ) msg = pNumber;
        if( theFunction == isEmail ) msg = pEmail;
        if( theFunction == isPhoneNumber ) msg = pPhoneNumber;
        if( theFunction == isName ) msg = pName;
    }
    
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;

    if ((emptyOK == false) && (isEmpty(theField.value))) 
        return warnEmpty(theField);

    if (theFunction(theField.value) == true) 
        return true;
    else
        return warnInvalid(theField,msg);

}
