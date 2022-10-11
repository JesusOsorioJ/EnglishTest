import { useEffect, useState } from 'react';
import { getSingleBySubtittle, getTestBySubtittle } from '../services/index';
import { useParams, useNavigate } from 'react-router-dom';


function InfoTest() {
    const [titles, setTitles] = useState([]);
    const [values, setValues] = useState([]);
    const [color, setColor] = useState([""]);
    const {id} = useParams();
    useEffect(() => {
        getSingleBySubtittle(id)
          .then((data) => {
            let attac = []
            for (let index = 0; index < data[0].text.length; index++){
                attac.push(data[0].text[index]) 
                attac.push(data[0].quiz[index])
            }
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
            setValues(dkfsd)
            setTitles(attac);
          });
      }, []);
      
      const HandlerOnClick = async (e) => {
        e.preventDefault()
        getTestBySubtittle(id).then((data) => {
          console.log("data", data);
          let dkfsd = []
          for (let i = 0; i < values.length; i++){
            const columna = []
            for (let j = 0; j < values[i].length; j++){
              const fila = []
              for (let k = 0; k < values[0][0].length; k++){
                const ass = (data[0]).result[[i,j,k].join()]
                let vlor = 0
                if (!!ass){vlor = ass.score+1}
                fila.push(vlor)
              }
            columna.push(fila) 
            }
            dkfsd.push(columna)
          }
          setColor(dkfsd)
          // setValues(dkfsd)
        })}
        const HandlerOnClick1 = async (e) => { setColor([""])}
    return ( 
    <div >
      <h2 >Qué dicen nuestros clienteds!</h2>
      
      {color.length==1?<button onClick={HandlerOnClick}>Mostrar datos</button>
      :<button onClick={HandlerOnClick1}>ocultar datos</button>}
      <br/><br/>
      <a href={`/${id.split(".")[0]}`}>Volver a tema</a><br/><br/>
      <a href={`/test/${id}`} >Evaluar subtema</a>
      <>{titles.map((item,index) =><>{ typeof item == "string"?<p>
        {item}
        <a href={`/test/${id}/${index/2}`}  >Evaluar</a>
        </p>:
      <>{values[(index-1)/2].map((item1,index1)=><>
      <table className="center">
        <tr>
          {item1.map((item1,index2)=><td className={color.length!=1?
            color[(index-1)/2][index1][index2]==0?"centertd":
            color[(index-1)/2][index1][index2]==1?"rojotd":
            "verdetd"
            :"centertd"}>{item1}</td>)}
        </tr>
      </table>
      </>)}</>}</>)}</>
    </div>      
      );
  }
  
  export default InfoTest;