
function CardWeather(props){
    const obj = props.item;
    return(
        <div className='cardBody'>
            <div className='cardTime'><p>{obj.time.split(" ")[1]}</p></div>
            <div className="cardImg"><img src={obj.condition.icon} alt="weather_icon"></img></div>
            <div className='cardText'>{obj.condition.text}</div>
            <div className="cardTemp">{obj.temp_c} *C</div>
        </div>
    );
}
export default CardWeather;