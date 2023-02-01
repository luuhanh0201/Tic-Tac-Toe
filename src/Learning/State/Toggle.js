import { useState } from "react";
import './ToggleStyle.css'

function Toggle({ children }) {
    // 1. enabling state: useState(initialize value)
    // 2. initialize state: usState(false)
    // 3. reading state: 
    // 4. update state:

    const [on, setOn] = useState(false)
    const [active, setActive] = useState(0)
    const handleSetControl = function(){
      setOn(function(on){
        return !on
      })
      setTimeout(()=>{
        return setActive(active + 1)
      },1000)
    }
    return (
        <div>
            <div className={`toggle ${on ? 'active' : ""}`} onClick={handleSetControl} >
            <div className={`spinner ${on ? 'active' : ""}`}></div>
            <div>Count {active}</div>
        </div>
        </div>
    )

}

export default Toggle;