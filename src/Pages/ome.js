const as= {"subtitle" :"",
"text":[
   "text1","text2"
],
"quiz":[
   {"Ingles singular":[
   "option1",
   "option2"],
   "Ingles Plural":[
   "option1",
   "option2"]},
   {"Singular español":[
     "option1",
     "option2"],
     "Españolquiz2":[
     "option1",
     "option2"]}
    ]
}
"\n \n




const text= ["er","ewr","ere","ewrwe"]
const opcion = "play plays jugar run runs correrxxeqweq"


const vfv = ["singular ingles", "plural inles", "español sinar"]
    const sd = "1.2"
const colunma = 3
let djgg = ""
    let sdsd = ""
const options = opcion.split("xx")
for (optiona in options){
    const optionaw = options[optiona].split(" ")
  const dmamda = optionaw.filter( (value,index) => (index % colunma == 0))
  if (colunma == 3) {
}
     const dmamda1 = optionaw.filter( (value,index) => ((index+2) % colunma == 0))
  const dmamda2 = optionaw.filter( (value,index) => ((index+1) % colunma == 0))
  console.log("-----")
    djgg = djgg + "{*"+vfv[0]+"*:[*" +dmamda.join("*,*")+ "*],*"+
                      vfv[1]+"*:[*" +dmamda1.join("*,*")+"*],*"+
                      vfv[2]+"*:[*" +dmamda2.join("*,*")+ "*]},"
  sdsd=sdsd +"*"+text[optiona]+"*,"
    
    }


const coofd = "*subtitle*:*"+ sd+"*,*text*:["+sdsd+"],*quiz*:["+djgg+"]}"
 console.log(coofd)
   

