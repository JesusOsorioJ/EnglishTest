import { useEffect, useState } from 'react';
import { getAllTitles } from '../services/index';
import { useParams } from 'react-router-dom';


function Subtitle() {
    const [titles, setTitles] = useState([]);
    const [subtitles, setSubTitles] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getAllTitles()
          .then((data) => {
            setTitles(data[id-2]);
            setSubTitles(data[id-2].subtitle);
            console.log(data[id-2]);
          });
      }, []);
    return ( 
    <div >
      <h2 >{titles.title}</h2>
      <a href="/">Volver a Home</a><br/><br/>
      <>{subtitles.map((item) =><> <a href={`/subtitle/${item.split(" ")[0]}`} >{item} </a><br/></>)}</>
    </div>      
      );
  }
  
  export default Subtitle;