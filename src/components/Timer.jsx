import React, { useRef, useEffect, useState } from "react";

const Timer = ({restart, pause, setVisible, handleEndGame}) => {
    const [num, setNum] = useState(60);    
    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {       
        setNum(60);
    }, [restart]);

    useEffect(() => {        
        if(pause){
            clearInterval(intervalRef.current);
        }else{
            intervalRef.current = setInterval(decreaseNum, 1000);
            return () => clearInterval(intervalRef.current);
        }
    }, [pause]);

    useEffect(() => {
        if(num === 0){
            clearInterval(intervalRef.current);
            handleEndGame();
        }
    }, [num]);

    return (
        <>
            {num}                        
        </>
    );
}

export default Timer