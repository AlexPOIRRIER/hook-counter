import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  let [count, setCount] = useState(0);

  const handleChange = (event)=> 
    setCount(event.target.value);

  return (
    <div>
        <input 
        onChange={handleChange}
        />
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(+count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;