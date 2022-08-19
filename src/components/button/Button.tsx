import React, {useEffect, useState} from 'react';
import {IElementData} from "../chart/Chart";
import './Button.css'


interface IButton {
    data: IElementData[]
    setData: React.Dispatch<React.SetStateAction<IElementData[]>>
}


const Button: React.FC<IButton> = ({setData, data}) => {

    const [date, setDate] = useState(1)

    setInterval(() => {
        clickHandler()
        setDate(prevState => prevState++)
    }, 34000)


    const clickHandler = () => {
        setData(prevState => {
            return (
                prevState.map(((element: IElementData) => {
                    return {...element, time: Number((Math.random() * 20).toFixed(1))}
                }))
            )
        })
    }


    return (
        <button onClick={clickHandler} className={'Button'}>
            <p>CHANGE TIME</p>
        </button>

    );
};

export default Button;