function mostrar(id){

let secciones=document.querySelectorAll('.seccion');

secciones.forEach(sec=>{

sec.classList.remove('activa');

});

document.getElementById(id).classList.add('activa');

sonido();
}

/* SONIDO */

function sonido(){

document.getElementById('clickSound').play();

}

/* SUBTITULOS */

function subtitulos(texto){

document.getElementById('subtitulos').innerText=texto;

}

/* HABLAR */
function hablar(texto){

speechSynthesis.cancel();

subtitulos(texto);

texto=texto
.replace(/1\./g,'Primero...')
.replace(/2\./g,'Segundo...')
.replace(/3\./g,'Tercero...')
.replace(/4\./g,'Cuarto...')
.replace(/\n/g,' ... ');

let voz=new SpeechSynthesisUtterance(texto);

voz.lang='es-ES';
voz.rate=0.82;
voz.pitch=1;

speechSynthesis.speak(voz);

}

/* VOCES */

function vozNina(texto){

speechSynthesis.cancel();

subtitulos(texto);

let voz=new SpeechSynthesisUtterance(texto);

voz.lang='es-ES';

voz.pitch=2;

speechSynthesis.speak(voz);

}

function vozNino(texto){

speechSynthesis.cancel();

subtitulos(texto);

let voz=new SpeechSynthesisUtterance(texto);

voz.lang='es-ES';

voz.pitch=1;

speechSynthesis.speak(voz);

}

function vozRobot(texto){

speechSynthesis.cancel();

subtitulos(texto);

let voz=new SpeechSynthesisUtterance(texto);

voz.lang='es-ES';

voz.pitch=0.5;

speechSynthesis.speak(voz);

}

/* RESPUESTAS */

function respuestaBuena(texto){

speechSynthesis.cancel();

document.getElementById('respuesta1').innerHTML=`

<h2 style="
color:#2e7d32;
font-size:35px;
margin-bottom:15px;
">

⭐ Correcto

</h2>

<p style="
font-size:24px;
line-height:1.7;
">

${texto}

</p>

`;

setTimeout(()=>{

hablar(texto);

},200);


}
function respuestaMala(texto){

speechSynthesis.cancel();

document.getElementById('respuesta1').innerHTML=`

<h2 style="
color:#d32f2f;
font-size:35px;
margin-bottom:15px;
">

💡 Sigue intentando

</h2>

<p style="
font-size:24px;
line-height:1.7;
">

${texto}

</p>

`;

setTimeout(()=>{

hablar(texto);

},200);

}


/* MENSAJES */

function enviarMensaje(){

let mensaje=document.getElementById('mensaje').value;

if(mensaje==""){

hablar('Debes escribir un mensaje');

return;

}

let caja=document.getElementById('mensajes');

caja.innerHTML+=`

<div style="
background:#dff6ff;
padding:20px;
border-radius:20px;
margin:15px;
font-size:25px;
">

${mensaje}

</div>

`;

vozNino('Mensaje enviado');

document.getElementById('mensaje').value='';

}

/* AGREGAR TEXTO */

function agregarTexto(texto){

document.getElementById('mensaje').value+=' '+texto;

hablar(texto);

}

/* LEER TODO */

function leerTodo(){

hablar('Bienvenido a la plataforma educativa inclusiva MED Aquí puedes aprender con sonidos imágenes juegos pictogramas y actividades.');

}

/* DETENER VOZ */

function detenerVoz(){

speechSynthesis.cancel();

}

/* MODO OSCURO */

function modoOscuro(){

document.body.classList.toggle('dark');

hablar('Modo oscuro activado');

}



/* LEER CON TAB Y MOUSE */

function leerElemento(e){

let elemento = e.target;

/* ELEMENTOS QUE SI SE LEEN */

if(
elemento.matches(
'h1,h2,h3,h4,p,button,input,img,li,.tarjeta,.situacion,.card'
)
){

let texto =
elemento.innerText ||
elemento.placeholder ||
elemento.alt;

/* EVITAR LEER VACÍO */

if(!texto) return;

/* EVITAR TEXTOS MUY LARGOS */

if(texto.length > 180) return;

/* EVITAR REPETIR */

if(window.ultimoTexto === texto) return;

window.ultimoTexto = texto;

/* DETENER VOZ ANTERIOR */

speechSynthesis.cancel();

/* PEQUEÑO RETRASO */

setTimeout(()=>{

hablar(texto);

},100);

}

}

document.addEventListener(
"mouseover",
leerElemento
);

document.addEventListener(
"focusin",
leerElemento
);


function enviarMensaje(){

let mensaje=document.getElementById('mensaje').value;

if(mensaje==""){

hablar('Debes escribir un mensaje');

return;

}

let caja=document.getElementById('mensajes');

caja.innerHTML+=`

<div class="mensajeBonito">

💬 ${mensaje}

</div>

`;

vozNino('Mensaje enviado correctamente');

document.getElementById('mensaje').value='';

}
function enviarMensajeSeguro(){

let mensaje=document.getElementById('mensajeSeguro').value;

if(mensaje==""){

hablar('Debes escribir un mensaje');

return;

}

let caja=document.getElementById('mensajesSeguro');

caja.innerHTML+=`

<div class="mensajeBonito">

🔒 ${mensaje}

</div>

`;

vozNina('Mensaje enviado');

document.getElementById('mensajeSeguro').value='';

}

function agregarTextoSeguro(texto){

document.getElementById('mensajeSeguro').value+=texto;

hablar(texto);

}
function hablar(texto){

speechSynthesis.cancel();

subtitulos(texto);

texto=texto

.replace(/1\./g,'Primero...')
.replace(/2\./g,'Segundo...')
.replace(/3\./g,'Tercero...')
.replace(/4\./g,'Cuarto...')
.replace(/5\./g,'Quinto...')
.replace(/✔/g,'')
.replace(/\n/g,' ... ');

let voz=new SpeechSynthesisUtterance(texto);

voz.lang='es-ES';
voz.rate=0.85;
voz.pitch=1;

speechSynthesis.speak(voz);

}
function enviarMensajeSeguro(){

let mensaje=document.getElementById('mensajeSeguro').value;

if(mensaje==""){

hablar('Debes escribir una respuesta');

return;

}

let caja=document.getElementById('mensajesSeguro');

caja.innerHTML+=`

<div class="mensajeBonito">

${mensaje}

</div>

`;

hablar('Respuesta enviada');

document.getElementById('mensajeSeguro').value='';

}

function agregarTextoSeguro(texto){

document.getElementById('mensajeSeguro').value+=texto;

hablar(texto);

}
function mostrarRespuesta(id,correcto,texto){

let caja=document.getElementById(id);

if(correcto){

caja.innerHTML=`
<h3 style="color:green;">✅ Correcto</h3>
<p>${texto}</p>
`;

hablar(texto);

}else{

caja.innerHTML=`
<h3 style="color:red;">❌ Intenta otra vez</h3>
<p>${texto}</p>
`;

hablar(texto);

}

}

/* S1 */

function validarS1(r){

if(r=="nocompartir"){

mostrarRespuesta(
"r1",
true,
"Muy bien. No compartir contraseñas es seguro."
);

}else{

mostrarRespuesta(
"r1",
false,
"No debemos compartir contraseñas."
);

}

}

function validarTexto1(){

let t=document.getElementById("s1").value.toLowerCase();

if(
t.includes("no")||
t.includes("ayuda")||
t.includes("compartir")
){

validarS1("nocompartir");

}else{

validarS1("compartir");

}

}

/* S2 */

function validarS2(r){

if(r=="ayudar"){

mostrarRespuesta(
"r2",
true,
"Excelente. Ayudar y respetar es correcto."
);

}else{

mostrarRespuesta(
"r2",
false,
"Burlarse puede lastimar."
);

}

}

function validarTexto2(){

let t=document.getElementById("s2").value.toLowerCase();

if(
t.includes("ayuda")||
t.includes("respeto")
){

validarS2("ayudar");

}else{

validarS2("burlarse");

}

}

/* S3 */

function validarS3(r){

if(r=="ayuda"){

mostrarRespuesta(
"r3",
true,
"Correcto. Pedir ayuda protege tu privacidad."
);

}else{

mostrarRespuesta(
"r3",
false,
"No debemos enviar datos personales."
);

}

}

function validarTexto3(){

let t=document.getElementById("s3").value.toLowerCase();

if(
t.includes("ayuda")||
t.includes("adulto")||
t.includes("no")
){

validarS3("ayuda");

}else{

validarS3("datos");

}

}
function respuestaUnidad1(id,correcto,texto){

let caja=document.getElementById(id);

if(correcto){

caja.innerHTML=`
<h2 style="color:green;">✅ Excelente Trabajo</h2>
<p style="font-size:22px;">${texto}</p>
`;

hablar(texto);

}else{

caja.innerHTML=`
<h2 style="color:red;">❌ Sigue Intentando</h2>
<p style="font-size:22px;">${texto}</p>
`;

hablar(texto);

}

}

/* P1 */

function validarP1(r){

if(r=="microfono"){

respuestaUnidad1(
"rp1",
true,
"Excelente trabajo. El micrófono sirve para grabar sonidos y voces y ayuda a hablar en clases virtuales y llamadas."
);

}else if(r=="imagen"){

respuestaUnidad1(
"rp1",
false,
"Sigue intentando. La imagen ayuda a observar información y comunicar ideas, pero no sirve para grabar sonidos o voces."
);

}else{

respuestaUnidad1(
"rp1",
false,
"Sigue intentando. El chat sirve para escribir mensajes y conversar usando internet, pero no graba voz."
);

}

}

/* TEXTO P1 */

function textoP1(){

let t=document.getElementById("p1").value.toLowerCase();

if(
t.includes("micro")||
t.includes("micrófono")
){

validarP1("microfono");

}else if(
t.includes("imagen")
){

validarP1("imagen");

}else{

validarP1("chat");

}

}

/* P2 */

function validarP2(r){

if(r=="chat"){

respuestaUnidad1(
"rp2",
true,
"Excelente trabajo. El chat permite escribir mensajes y comunicarse usando internet."
);

}else if(r=="audio"){

respuestaUnidad1(
"rp2",
false,
"Sigue intentando. El audio sirve para escuchar música, voces y sonidos, pero no para escribir mensajes."
);

}else{

respuestaUnidad1(
"rp2",
false,
"Sigue intentando. El micrófono ayuda a grabar sonidos y voces, pero no sirve para escribir mensajes."
);

}

}

function textoP2(){

let t=document.getElementById("p2").value.toLowerCase();

if(t.includes("chat")){

validarP2("chat");

}else if(t.includes("audio")){

validarP2("audio");

}else{

validarP2("microfono");

}

}

/* P3 */

function validarP3(r){

if(r=="pictogramas"){

respuestaUnidad1(
"rp3",
true,
"Excelente trabajo. Los pictogramas ayudan a comunicar ideas, emociones y necesidades usando dibujos."
);

}else if(r=="chat"){

respuestaUnidad1(
"rp3",
false,
"Sigue intentando. El chat sirve para escribir mensajes, pero no comunica usando dibujos."
);

}else{

respuestaUnidad1(
"rp3",
false,
"Sigue intentando. El audio ayuda a escuchar sonidos y voces, pero no utiliza dibujos para comunicar."
);

}

}

function textoP3(){

let t=document.getElementById("p3").value.toLowerCase();

if(
t.includes("picto")||
t.includes("dibujo")
){

validarP3("pictogramas");

}else if(t.includes("chat")){

validarP3("chat");

}else{

validarP3("audio");

}

}

/* P4 */

function validarP4(r){

if(r=="audio"){

respuestaUnidad1(
"rp4",
true,
"Excelente trabajo. El audio permite escuchar sonidos, voces y música y ayuda a mejorar la comprensión."
);

}else if(r=="imagen"){

respuestaUnidad1(
"rp4",
false,
"Sigue intentando. La imagen ayuda a observar información visual, pero no permite escuchar sonidos."
);

}else{

respuestaUnidad1(
"rp4",
false,
"Sigue intentando. El chat sirve para escribir mensajes y comunicarse usando texto, pero no reproduce sonidos."
);

}

}

function textoP4(){

let t=document.getElementById("p4").value.toLowerCase();

if(t.includes("audio")){

validarP4("audio");

}else if(t.includes("imagen")){

validarP4("imagen");

}else{

validarP4("chat");

}

}
function reiniciarActividad(){

hablar(
"Puedes volver a intentarlo. Aprender es practicar."
);

}
let bloqueadas = [false, false, false, false, false, false];
let completadas = [false, false, false, false, false, false];
let progreso = 0;

function actualizarBarra(){

let bar = document.getElementById("barraProgreso");
let estado = document.getElementById("estadoMision");

let total = (progreso / 6) * 100;
bar.style.width = total + "%";

estado.innerText = `Misión ${progreso} / 6 completadas`;

}

function mision(n, respuesta){

if(bloqueadas[n-1]) return;

let correcto = false;
let mensaje = "";

/* MISIÓN 1 */
if(n === 1){
if(respuesta === "chat"){
correcto = true;
mensaje = " Correcto: el chat permite comunicación directa en línea.";
}else if(respuesta === "microfono"){
mensaje = " Incorrecto: el micrófono solo sirve para audio, no conversación escrita.";
}else if(respuesta === "imagen"){
mensaje = " Incorrecto: una imagen no permite comunicación.";
}
}

/* MISIÓN 2 */
if(n === 2){
if(respuesta === "no"){
correcto = true;
mensaje = " Correcto: nunca compartas tu contraseña.";
}else if(respuesta === "si"){
mensaje = " Incorrecto: compartirla pone en riesgo tu cuenta.";
}
}

/* MISIÓN 3 */
if(n === 3){
if(respuesta === "pictogramas"){
correcto = true;
mensaje = " Correcto: los pictogramas comunican con imágenes.";
}else if(respuesta === "audio"){
mensaje = " Incorrecto: el audio no reemplaza información visual.";
}
}

/* MISIÓN 4 */
if(n === 4){
if(respuesta === "verificar"){
correcto = true;
mensaje = " Correcto: siempre debes verificar antes de compartir.";
}else if(respuesta === "compartir"){
mensaje = " Incorrecto: compartir sin verificar difunde noticias falsas.";
}
}

/* MISIÓN 5 */
if(n === 5){
if(respuesta === "configurar_privacidad"){
correcto = true;
mensaje = " Correcto: la privacidad protege tu información.";
}else if(respuesta === "publicar_todo"){
mensaje = " Incorrecto: publicar todo expone tu vida personal.";
}
}

/* MISIÓN 6 */
if(n === 6){
if(respuesta === "respetar"){
correcto = true;
mensaje = " Correcto: el respeto en internet es esencial.";
}else if(respuesta === "burlarse"){
mensaje = " Incorrecto: burlarse causa daño a otros.";
}
}

hablar(mensaje);

if(correcto){
completadas[n-1] = true;
progreso++;
document.getElementById("m"+n).style.background = "#d4f8d4";
}else{
document.getElementById("m"+n).style.background = "#ffd6d6";
}

actualizarBarra();
finalJuego();

}

function textoMision(n){

let val = document.getElementById("t"+n).value.toLowerCase();

if(n === 1 && val.includes("chat")) mision(1,"chat");
else if(n === 1 && val.includes("micro")) mision(1,"microfono");
else if(n === 1 && val.includes("imagen")) mision(1,"imagen");

else if(n === 2 && val.includes("no")) mision(2,"no");
else if(n === 2 && val.includes("si")) mision(2,"si");

else if(n === 3 && val.includes("pict")) mision(3,"pictogramas");
else if(n === 3 && val.includes("audio")) mision(3,"audio");

else if(n === 4 && val.includes("verif")) mision(4,"verificar");
else if(n === 4 && val.includes("compart")) mision(4,"compartir");

else if(n === 5 && val.includes("priv")) mision(5,"configurar_privacidad");
else if(n === 5 && val.includes("todo")) mision(5,"publicar_todo");

else if(n === 6 && val.includes("respet")) mision(6,"respetar");
else if(n === 6 && val.includes("burla")) mision(6,"burlarse");

else mision(n,"error");
bloqueadas[n-1] = true;

}

function finalJuego(){

if(progreso === 6){

document.getElementById("finalJuego").innerHTML = `
<h2> MISIÓN COMPLETADA</h2>
<p>Has terminado todas las misiones del mundo digital.</p>
<h3> Calificación: 5.0</h3>
<p> Ciudadano digital avanzado</p>
`;

hablar("Felicitaciones, completaste el juego");

}

}
function reiniciarMision(n){

completadas[n-1] = false;
bloqueadas[n-1] = false; // 🔥 IMPORTANTE

progreso--;

document.getElementById("m"+n).style.background = "white";

let input = document.getElementById("t"+n);
if(input) input.value = "";

hablar(" Misión reiniciada. Ahora puedes responder otra vez.");

actualizarBarra();
}
function agregarTexto(texto){

document.getElementById("mensaje").value += texto;

}


function agregarTexto2_1(t){
document.getElementById("mensaje2_1").value += t;
}

function agregarTexto2_2(t){
document.getElementById("mensaje2_2").value += t;
}

function agregarTexto2_3(t){
document.getElementById("mensaje2_3").value += t;
}

function enviarMensaje2_1(){

let t = document.getElementById("mensaje2_1").value.toLowerCase().trim();
let res = document.getElementById("res2_1");
let caja = document.getElementById("caja1");

/* 🧠 lógica */
let ok =
t.includes("hola") &&
t.includes("amigo") &&
t.includes("ya comiste") &&
t.indexOf("hola") < t.indexOf("amigo") &&
t.indexOf("amigo") < t.indexOf("ya comiste");

if(ok){

res.innerHTML = "🟢 BIEN: saludo completo y coherente.";
res.style.color = "green";

caja.classList.add("correcto");
caja.classList.remove("incorrecto");

hablar("Bien, saludo correcto");

} else {

res.innerHTML = "🔴 MAL: puedes intentarlo otra vez.";
res.style.color = "red";

caja.classList.add("incorrecto");
caja.classList.remove("correcto");

hablar("Mal, intenta otra vez");

}

/* 🔥 IMPORTANTE: SIEMPRE PERMITIR REINTENTO */
document.getElementById("mensaje2_1").value = "";
document.getElementById("mensaje2_1").focus();

}

/* 🟢 SITUACIÓN 2 */
function enviarMensaje2_2(){

let t = document.getElementById("mensaje2_2").value.toLowerCase().trim();
let res = document.getElementById("res2_2");
let caja = document.getElementById("caja2");

/* 🧠 ORDEN CORRECTO */
let correcto =
t.includes("invito") &&
t.indexOf("invito") < t.indexOf("participar") &&
t.indexOf("participar") < t.indexOf("actividad");

if(correcto){

res.innerHTML = "🟢 BIEN: la invitación esta muy bien  ordenada y se entiende muy bien.";
res.style.color = "green";

caja.classList.add("correcto");
caja.classList.remove("incorrecto");

hablar("Bien, orden correcto");

} else {

res.innerHTML = "🔴 MAL: revisa el orden de la invitacion puede que no se entienda.";
res.style.color = "red";

caja.classList.add("incorrecto");
caja.classList.remove("correcto");

hablar("Mal, el orden no es correcto");

}

document.getElementById("mensaje2_2").value = "";

}
/* SITUACION 1 */

function enviarMensaje2_1(){

let t=document.getElementById(
"mensaje2_1"
).value.toLowerCase();

let res=document.getElementById(
"res2_1"
);

if(
t.includes("hola") &&
t.includes("amigo") &&
t.includes("comiste")
){

res.innerHTML=`

<h3 style="color:green;">
⭐ Excelente trabajo
</h3>

<p>
Tu mensaje está correcto porque tiene un saludo,
se dirige al amigo y pregunta de manera clara si ya comió.
La comunicación digital debe ser clara y amable.
</p>
`;

hablar(
"Tu mensaje está correcto porque tiene un saludo, se dirige al amigo y pregunta de manera clara si ya comió. La comunicación digital debe ser clara y amable.."
);

}else{

res.innerHTML=`

<h3 style="color:red;">
💡 Sigue intentando
</h3>

<p>
Tu mensaje necesita un saludo y una pregunta clara.
Recuerda que el chat sirve para comunicarnos mejor.
</p>
`;



}

reinicioSuave("mensaje2_1","res2_1");

}


/* SITUACION 2 */

function enviarMensaje2_2(){

let t=document.getElementById(
"mensaje2_2"
).value.toLowerCase();

let res=document.getElementById(
"res2_2"
);

if(
t.includes("invito") &&
t.includes("participar") &&
t.includes("actividad")
){

res.innerHTML=`

<h3 style="color:green;">
⭐ Excelente trabajo
</h3>

<p>
Tu invitación está correcta porque invita con respeto
y explica la actividad.
Las invitaciones digitales deben ser claras y amables.
</p>
`;

hablar(
"Tu invitación está correcta porque invita con respeto y explica la actividad. Las invitaciones digitales deben ser claras y amables.."
);

}else{

res.innerHTML=`

<h3 style="color:red;">
💡 Sigue intentando
</h3>

<p>
Tu invitación no está completa.
Recuerda invitar y explicar la actividad.
</p>
`;


}

reinicioSuave("mensaje2_2","res2_2");

}


/* SITUACION 3 */

function enviarMensaje2_3(){

let t=document.getElementById(
"mensaje2_3"
).value.toLowerCase();

let res=document.getElementById(
"res2_3"
);

if(
t.includes("ayudo") ||
t.includes("hola") ||
t.includes("juntos") ||
t.includes("animo")
){

res.innerHTML=`

<h3 style="color:green;">
⭐ Excelente trabajo
</h3>

<p>
Tu mensaje es correcto porque muestra ayuda,
respeto y apoyo emocional.
En internet también debemos ser amables.
</p>
`;

hablar(
"Tu mensaje es correcto porque muestra ayuda, respeto y apoyo emocional. En internet también debemos ser amables.."
);

}else{

res.innerHTML=`

<h3 style="color:red;">
💡 Sigue intentando
</h3>

<p>
Tu mensaje necesita palabras amables y de apoyo.
La comunicación digital también debe respetar y ayudar.
</p>
`;


}

reinicioSuave("mensaje2_3","res2_3");

}


/* REINICIO BONITO */

function reinicioSuave(inputId,resId){

setTimeout(function(){

document.getElementById(
inputId
).value="";

document.getElementById(
inputId
).focus();



},4000);

}

document.addEventListener("keydown", function(e){

if(
e.key==="Enter" &&
document.activeElement.onclick
){
document.activeElement.click();
}

});
/* ACTIVAR TAB AUTOMATICO */

document.querySelectorAll(
'h1,h2,h3,h4,p,li,.tarjeta,.card,.situacion,.preguntaActividad,.instrucciones'
).forEach(function(el){

el.setAttribute(
'tabindex',
'0'
);

});
