import { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
  const {name , flags, timezones, area , capital} = country;

  const [visited , setVisited] = useState(false)


   const handleVisited = () => {
    setVisited(!visited)
   }
   
//    const passWithParams = () => {
//     handleVisitedCountry(country);
//    }
//    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color : visited ? 'purple' : 'black'}}>Name : {name ?.common} </h3>
            <img src={flags.png} alt="" />
            <p> Timezone :{timezones} </p>
            <p>area :{area} </p>
            <p>Capital :{capital} </p>
            
            <button onClick={() => handleVisitedCountry(country.name.common)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
            <button onClick={handleVisited}> {visited ? 'Visited': 'Going'} </button>
            {visited ? ' i have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;