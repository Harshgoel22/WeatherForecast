function UpperDiv(props){
    return(
        <div className="upper-div">
            <div className="location" style={{fontSize:"24px"}}>{props.city}, {props.country}</div>
            <div className="icon">
                <div><img src={props.icon} alt="weather_icon"></img></div>
                <div className="temp"><p style={{fontSize:"40px"}}>{props.temp} <span style={{fontSize:"14px"}}>o <span style={{fontSize:"20px"}}>C</span></span></p></div>
            </div>
            <div className="msg">{props.msg}</div>
            <div className="update">updated on {props.update}</div>
        </div>
    );
}

export default UpperDiv;