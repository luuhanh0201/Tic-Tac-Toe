import { useEffect, useRef, useState } from "react";

function Content() {
    /**
     useRef

    1. Lấy value của State
    2. Re
     * 
     */
    const [miniSecond, setMiniSecond] = useState(0)
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
    const idTimer = useRef();
    const prev = useRef();
    useEffect(() => {
        prev.current = miniSecond
    }, [miniSecond])
    const countStart = function () {
        idTimer.current = setInterval(() => {
            setMiniSecond(prev => {
                if (prev === 100) {
                    setSecond(prev => {
                        if (prev === 60) {
                            setMinute(prev => {
                                if (prev === 60) {
                                    setHour(prev => {
                                        return prev + 1
                                    })
                                    prev = 0
                                }
                                return prev + 1
                            })
                            prev = 0
                        }
                        return prev + 1
                    })
                    prev = 0
                }
                return prev + 1
            })
        }, 10)
    }
    const countStop = function () {
        clearInterval(idTimer.current)

    }
    console.log()
    return (
        <div>

            <h1>{hour} : {minute < 10 ? "0" + minute : minute}  : {second < 10 ? "0" + second : second} : {miniSecond < 10 ? "0" + miniSecond : miniSecond}</h1>

            <button onClick={countStart}>Start</button>
            <button onClick={countStop}>Stop</button>
        </div>

    );
}

export default Content;