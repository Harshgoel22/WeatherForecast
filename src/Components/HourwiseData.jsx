import React from "react";
import CardWeather from "./CardWeather";
import './cardWeather.css';
import GraphPlot from "./GraphPlot";

function HourwiseData(props){
    const hrData = props.hrData;
    console.log("i am in hourdata: "+hrData);
    return(
        <div style={{width: '84.5%', marginLeft: '100px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} className='hrData'>
            <div className='CardCollection' style={{position: 'relative', display: 'flex', flexDirection: 'row', padding: '1px'}}>
                {hrData.map((item,index)=>{
                    return <CardWeather key={index} item={item}/>
                })}
            </div>
            <div className="graphplot"><GraphPlot x={props.x} y={props.y}/></div>
        </div>
    );
}

export default HourwiseData;