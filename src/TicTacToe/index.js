import { useState } from 'react';
import { calculateWinner } from './lines';
import './style.scss'
import Table from './Table';

const Tiktactoe = (props) => {
    const [table, setTable] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(table);
    const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
    const handleClick = (index) => {
        const tableCopy = [...table];
        if (winner || tableCopy[index]) { return; }
        tableCopy[index] = xIsNext ? 'X' : 'O';
        setTable(tableCopy)
        setXIsNext(!xIsNext)
        if (calculateWinner(tableCopy)) {
            setScores({
                ...scores,
                [calculateWinner(tableCopy)]: scores[calculateWinner(tableCopy)] + 1
            });
        } else if (!tableCopy.includes(null)) {
            setScores({ ...scores, draw: scores.draw + 1 });
        }
    };


    const handleResetGame = () => {
        setTable(Array(9).fill(null))
        setXIsNext(true)
        setScores({ X: 0, O: 0, draw: 0 });

    }
    const handleClickRemote = () => {
        document.querySelector('.informational').classList.toggle('informational')
        setTable(Array(9).fill(null))
        setXIsNext(true)
    }


    return (
        <div className='wrapper'>
            <h1 className='game'>Tic Tac Toe</h1>
            <Table cells={table} onClick={handleClick}></Table>
            {winner || (!winner && !table.includes(null)) ? (
                <div className='informational'>
                    <div className={winner ? 'winner' : 'draw'} onClick={handleClickRemote}>
                        {winner ? `Winner is ${winner}` : 'Draw'}
                    </div>
                    <button className='btn' onClick={handleClickRemote}>
                        Continue
                    </button>
                </div>
            ) : null}
            <div
                className={`overlay ${winner || (!winner && !table.includes(null)) ? 'show' : ''}`}
                onClick={handleClickRemote}
            />
            <div className='scores'>
                <div className='playerX'>Player X:  {scores.X}</div>
                <div className='playerY'>Player O:  {scores.O}</div>
                <div className='draw-score'>Draw:  {scores.draw}</div>
            </div>
            <button className='btn' onClick={handleResetGame}>Reset</button>

        </div>
    );
}
export default Tiktactoe;