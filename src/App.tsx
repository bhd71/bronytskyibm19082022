import React, {useState} from 'react';
import './style.css'
import Chart from "./components/chart/Chart";
import Button from "./components/button/Button";

function App() {
    const [data, setData] = useState([{name: "Landing Page", time: 7.4},
        {name: "Configurator", time: 0.2},
        {name: "Check-out", time: 7.0},
        {name: "Deal", time: 3.8}])
    return (
        <div className={'App'}>
            <Chart data={data}/>
            <Button data={data} setData={setData}/>
        </div>
    );
}

export default App;
