import React, { useEffect, useState } from 'react';
import add from '../../calculate';
import New from './new';

const Cometic = () => {
    const [cometic,setCometic] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCometic(data))
    
    },[])
    return (
        <div>
            <h2>Welcome to Cosmetic Store</h2>
         <h2>{cometic.length}</h2>
            {
                cometic.map(data => <New data={data} ></New>
                )

            }
        </div>
    );
};



export default Cometic;