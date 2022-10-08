const as= {"subtitle" :"",
 "text":[
    "text1","text2"
 ],
 "quiz":[
    {"inglesquiz1":[
    "option1",
    "option2"],
    "Españolquiz1":[
    "option1",
    "option2"]},
    {"inglesquiz2":[
      "option1",
      "option2"],
      "Españolquiz2":[
      "option1",
      "option2"]}]
}



const hola = "10. LA VOZ PASIVA ...........................................................................10.1 Introducción ..............................................................................10.2 Formación de la pasiva..............................................................10.3 Uso de la voz pasiva..................................................................10.4 Comparación con la pasiva española ........................................10.5 Tiempos más frecuentes en pasiva ..........................................10.6 Restricciones al uso de la voz pasiva ........................................";

const hola1 = hola.replace(/[10]/g, 'qw10');
const hola2 = hola1.replace(/[.]/g, '');
const hola3 = hola2.replace(/[10]/g, '10.');
var arrayDeCadenas = hola3.split("qw");
console.log(arrayDeCadenas)

const text= ["Regla general El plural de los nombres se forma, por regla general, añadiendo una -s al singular: ","1. Los nombres acabados en -s o sonido silbante similar (ss, sh, ch, x, z, zz) añaden -es:", "Los terminados en -o precedida de consonante, también añaden -es:"]
const opcion = "one hundred per cent # cien por cien # ninety miles per hour # noventa millas por hora # £10 per day # 10 libras por díaxxThey were sitting round the table # Estaban sentados alrededor de la mesa # The earth goes round the Sun # La tierra gira alrededor del sol"


const vfv = ["ingles", "español"]
    const sd = "1.2"
const colunma = vfv.length
let djgg = ""
    let sdsd = ""
const options = opcion.split("xx")
for (optiona in options){
    const optionaw = options[optiona].split(" # ")
  const dmamda3 = optionaw.filter( (value,index) => ((index+3) % colunma == 0))
  const dmamda1 = optionaw.filter( (value,index) => ((index+2) % colunma == 0))
  const dmamda2 = optionaw.filter( (value,index) => ((index+1) % colunma == 0))
  const dmamda = optionaw.filter( (value,index) => (index % colunma == 0))
      
      if (optiona < text.length) {sdsd=sdsd+"*"+text[optiona]+"*,"}
    
  
      if (colunma == 2) {
        djgg = djgg + "{*"+vfv[0]+"*:[*" +dmamda.join("*,*")+ "*],*"+
                      vfv[1]+"*:[*" +dmamda2.join("*,*")+ "*]},"
       }
  
       if (colunma == 3) {
        djgg = djgg + "{*"+vfv[0]+"*:[*" +dmamda.join("*,*")+ "*],*"+
                      vfv[1]+"*:[*" +dmamda1.join("*,*")+"*],*"+
                      vfv[2]+"*:[*" +dmamda2.join("*,*")+ "*]},"
       }
       if (colunma == 4) {
        djgg = djgg + "{*"+vfv[0]+"*:[*" +dmamda.join("*,*")+ "*],*"+
                          vfv[1]+"*:[*" +dmamda3.join("*,*")+"*],*"+
                          vfv[2]+"*:[*" +dmamda1.join("*,*")+"*],*"+
                          vfv[3]+"*:[*" +dmamda2.join("*,*")+ "*]},"
       }
  
    
  
    }


const coofd = "*subtitle*:*"+ sd+"*,*text*:["+sdsd+"],*quiz*:["+djgg+"]}"
 
   
console.log(coofd)
