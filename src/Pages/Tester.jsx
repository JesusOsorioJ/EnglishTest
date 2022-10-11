import { useEffect, useState } from 'react';
import { getSingleBySubtittle, createUpdateTest } from '../services/index';
import { useParams, useNavigate } from 'react-router-dom';


function Tester() {
  const [ocult, setOcult] = useState(0);
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const {id, subid} = useParams();
  useEffect(() => {
      getSingleBySubtittle(id)
        .then((data) => {
          let dkfsd = []
          const holamun = Object.values(data[0].quiz)
          for (let i = 0; i < holamun.length; i++){
            const holamun1 = Object.values(holamun[i])
            const columna = []
            for (let j = 0; j < holamun1[0].length; j++){
              const fila = []
              for (let k = 0; k < holamun1.length; k++){
                fila.push(holamun1[k][j])
              }
            columna.push(fila) 
            }
            dkfsd.push(columna)
          }
          console.log(data);
          let sdjfnsk= []
          for (let i in data[0].quiz){
            console.log(i);
            sdjfnsk.push(Object.keys(data[0].quiz[i]))
          }
          console.log(sdjfnsk);
          setKeys(sdjfnsk)
          setValues(dkfsd)
        });
    }, []);

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const HandlerOnClick = async (e) => {
      e.preventDefault()
      let test1 = 0
      if (!subid){ test1= getRandomInt(values.length)}else{ test1=subid}
      const test2 = getRandomInt(values[test1].length)
      let test31 = 0
      let test32 = 0
      while (test31 == test32){
        test31= getRandomInt(values[0][0].length)
        test32= getRandomInt(values[0][0].length)
        setQuestion([values[test1][test2][test31],keys[test1][test31], keys[test1][test32],values[test1][test2][test32],
        [test1,test2,test32],test31])
      }
      setOcult(0)
    };

      const HandlerOnClick1 = async (e) => {
        e.preventDefault()
        const test1=question[4][0] 
        let test2=question[4][1]+1
        console.log("values[test1].length",values[test1].length)
        if (test2 >= values[test1].length){test2 -= 1}  
        console.log("test2",test2)
        const test32=question[4][2]
        const test31=question[5]
        setQuestion([values[test1][test2][test31],keys[test1][test31], keys[test1][test32],values[test1][test2][test32],
        [test1,test2,test32],test31])
        setOcult(0)
      };

      const HandlerOnClick2 = async (e) => {
        e.preventDefault()
        const test1=question[4][0] 
        const test2 = getRandomInt(values[test1].length)
        const test32=question[4][2]
        const test31=question[5]
        setQuestion([values[test1][test2][test31],keys[test1][test31], keys[test1][test32],values[test1][test2][test32],
        [test1,test2,test32],test31])
        setOcult(0)
      };

      

      

      const HandlerOnSubmit1 = async (e) => {
        e.preventDefault()
        const ces = answer.columnes.split(" ")
        let test1 = 0
        if (!subid){ test1= getRandomInt(values.length)}else{ test1=subid}
        setQuestion([values[test1][0][ces[0]],keys[test1][ces[0]], keys[test1][ces[1]],values[test1][0][ces[1]],
          [test1,0,ces[1]],ces[0]])
      }

      const handleOnChange = (e) => {

        setAnswer({...answer, [e.target.name] : e.target.value});
        console.log(e.target.value);
      };

      const HandlerOnSubmit = async (e) => {
        e.preventDefault()
        let sum = 0
        const splitanswer = answer.answers.split(" ")
        console.log(splitanswer);
        const splitquestion = question[3].split(" ")
        for (let ans in splitanswer){
          if (splitanswer[ans].toLowerCase() == splitquestion[ans].toLowerCase() ){
            sum += 1
          }
        }
        createUpdateTest({id: id,test:question[4], score:(sum/splitanswer.length)})
        setOcult(1)
      }
        
  return ( 
  <div >
    <a href={`/subtitle/${id}`}>Volver a subtema</a><br/><br/>
    {question.length==0?
    <>
    <button onClick={HandlerOnClick} >Evaluar Aleatoriamente</button>
    <form onSubmit={HandlerOnSubmit1}>
        <input type="text" required={true} placeholder="Input column1 column2..." name="columnes" onChange={handleOnChange}/>
        <button type="submit">Evaluar en orden</button>
      </form>
    </>
    :
    <>
    <a href={`/test/${id}`}>Volver a inicio test</a><br/><br/>
    <p>{question[1]}</p>
    <p>{question[0]}</p>
    <p>{question[2]}</p>
    {ocult==0?
    <>
      <form onSubmit={HandlerOnSubmit}>
        <input type="text" required={true} placeholder="Input your answer..." name="answers" onChange={handleOnChange}/>
        <button type="submit">Enviar</button>
      </form>
    </>
    :
    <>
      <p>{question[3]}</p>
      <button onClick={HandlerOnClick}>Evaluar Aleatoriamente</button>
      <button onClick={HandlerOnClick1}>Seguir a proximo</button>
      <button onClick={HandlerOnClick2}>Evaluar Seguir Aleatoriamente</button>
      
    </>
    }
    </>
    }
    
  </div>      
    );
}
  
  export default Tester;