import React from 'react';

interface IScale {
    time: number,
    left?: number
    width: number
}


const Scale: React.FC<IScale> = ({time, left, width}) => {
    return (
        <div className={'Chart-scale__background'}>
            <div style={{width: `${width}%`, left: `${left}%`}} className={'Chart-scale__field'}>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default Scale;