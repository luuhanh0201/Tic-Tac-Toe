import React from 'react';
import Cell from './Cell';
// import { Winner } from './lines';

const Table = (props) => {
    // const show = () => {
    //     const cells = [
    //         "X", null, null,
    //         null, "X", null,
    //         null, null, "X"
    //     ]
    //     console.log(props)
    // }
    return (
        <div className='table'>
            {props.cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={item === 'X' ? 'x' : item === "O" ? 'o' : ' '}
                ></Cell>
            ))}
        </div>
    );
};

export default Table;