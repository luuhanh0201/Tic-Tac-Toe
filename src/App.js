import Learn from './Learning/UseRef';
import './globalStyle.scss'
import { useState } from 'react';
function App() {

  const [toggle, setToggle] = useState(false)


  return (
    <div className="App">
    <button
    onClick={()=>{setToggle(!toggle)}}
    >Toggle</button>
      
        {toggle &&
       <Learn/>}
       
    </div>
  );
}

export default App;
