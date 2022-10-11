
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
const opcion = "measles sarampión german_measles rubeola mumps paperas rickets raquitismoxxMeasles is an infectious El sarampión es una enfermedad"


const vfv = ["ingles", "español"]
const capitulo = "1.2"
const colunma = vfv.length
const options = opcion.split("xx")
let djgg = ""
let sdsd = ""

for (optiona in options){
 let entro = 0
 let optionaw = []
     
 const dkfs = options[optiona].split("")
 const asfjner =  dkfs.map((i,index) => {
  if ((index != 0) && (i == i.toUpperCase()) &&(i != " ") && ((parseInt(i)+1)!=(parseInt(i)+1))
  && (i !="_") && (i !="-") && (i !="/") && (i !="(") && (i !=")") && (i !="?") 
   && (i !=",") && (i !="/")){
       entro = 1
   if (index != 0){if (dkfs[index-1] == "¿"){ return i }}
       return "xx "+i
   
  }else{return i}})
           
 if (entro == 1){
    optionaw = asfjner.join('').split(" xx ")
 }else{
    optionaw = asfjner.join('').split(" ")
 }
   
   if (optionaw.length % colunma == 1) {
     
     optionaw = optionaw[0].split(" ").concat(optionaw.filter((i,j)=>j!=0))
   }
   
                               
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
       }}
 
 
 const coofd = "*subtitle*:*"+ capitulo +"*,*text*:["+sdsd+"],*quiz*:["+djgg+"]}"
 console.log(coofd)
 