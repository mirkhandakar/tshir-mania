import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

// 1. call createContext with a default value
// 2. set a variable of the context with uppercase
// 3. make sure you export the context to use it on other places.
// 4. Wrap your child content using RingContext.Provider
// 5. provide a value
// 6. to consume the context from child component
// 7. useContext hook and you will need to pass the contextName 


export const RingContext = createContext('ring');
const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const goldChain = 'Gold Chain';

    const ornament = 'Diamond Ring';
    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h3>Grandpa</h3>
                <button
                    onClick={handleBuyHouse}
                >Buy A House</button>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;