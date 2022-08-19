import React from 'react';
import Scale from "./Scale";
import {IElementData} from "../Chart";


interface IRow extends IElementData {
    width: number,
    left: number
}

const Row: React.FC<IRow> = ({time, name, left, width}) => {


    return (
        <div className={'Chart-row__flex'}>
            <div className={'Chart-row__title'}>
                <h2>{name}</h2>
            </div>
            <div style={{width: '50%'}}>
                <Scale time={time} left={left - width} width={width}/>
            </div>
        </div>
    );
};

export default Row;