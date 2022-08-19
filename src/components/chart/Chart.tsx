import React from 'react';
import Row from "./components/Row";
import './Chart.css'


export interface IElementData {
    name: string
    time: number
}

interface IData {
    data: IElementData[]
}

const Chart: React.FC<IData> = ({data}) => {

    const sum: number = data.reduce((accum: number, element) => {
        accum += element.time
        return accum
    }, 0)

    let calcLeft: number = 0

    return (
        <div>
            <h1 className={'Chart_title'}>
                SPENT TIME (SECONDS)
            </h1>
            <div className={'Chart'}>
                <div>
                    {data?.map((element) => {

                        let width = element.time / sum * 100
                        calcLeft += width

                        return <Row
                            name={element.name}
                            time={element.time}
                            key={element.name}
                            width={width}
                            left={calcLeft}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Chart;