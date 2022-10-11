import { useEffect, useState } from 'react';
import { getAllTitles } from '../services/index';
import { useParams, useNavigate } from 'react-router-dom';


function Home() {
    const [titles, setTitles] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getAllTitles()
          .then((data) => {
            setTitles(data);
            console.log("data",data[0].subtitle);
          });
      }, []);
    return ( 
    <div >
      <h2 >Qué dicen nuestros clienteds!</h2>
      <>{titles.map((item) =><> <a href={item.title.split(".")[0]}  >{item.title} </a><br/></>)}</>
    </div>      
      );
  }
  
  export default Home;