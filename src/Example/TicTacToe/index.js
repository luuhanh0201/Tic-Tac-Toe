import { useState } from 'react';
import { calculateWinner } from './lines';
import './style.scss'
import Table from './Table';

const Tiktactoe = () => {
    const [table, setTable] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(table);
    const handleClick = (index) => {
        const tableCopy = [...table];
        if (winner || tableCopy[index]) { return; }
        console.log(index)
        tableCopy[index] = xIsNext ? 'X' : 'O';
        setTable(tableCopy)
        setXIsNext(!xIsNext)
    };
    const handleResetGame = () => {
        setTable(Array(9).fill(null))
        setXIsNext(true)

    }
    return (
        <div>
            <Table cells={table} onClick={handleClick}></Table>
            {winner && <div className='winner'>Winner is {winner}</div>}
            <button className='btn' onClick={handleResetGame}>Reset</button>

        </div>
    );
}

export default Tiktactoe;