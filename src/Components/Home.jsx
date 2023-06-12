import React,{useState} from "react";
import SearchBar from "./searchBar";
import UpperDiv from "./UpperDiv";
import Navbarr from "./Navbar";
import SlidingWindow from "./SlidingWindow";
import './index.css';
import HourwiseData from "./HourwiseData";

function Home(){
    const [city,setCity] = useState();
    const [country,setCountry] = useState();
    const [icon,setIcon] = useState();
    const [temp,setTemp] = useState();
    const [msg,setMsg] = useState();
    const [update,setUpdate] = useState();
    const [cityName,setCityName] = useState("London");
    const [nm,setnm] = useState("");
    const [loader,setLoader] = useState(true);
    //for geolocation
    const [status, setStatus] = useState("begin");
    const [isPaneOpenLeft,setState] = useState(false);
    //for hourwise data
    const [valid, setValid] = useState(false);
    //for graph
    const [x,setX] = useState([]);
    const [y,setY] = useState([]);
    //for hourwise data
    const [hrData, setHrData] = useState([]);

    const getHourData = async (str="") => {
        try{
            let api = `https://api.weatherapi.com/v1/forecast.json?key=4ac55578272a40fe963132616230904&q=${(str!=="")?str:cityName}&days=1&aqi=no&alerts=no`;
            const data = await(await fetch(api)).json();
            console.log(data);
            const list = data.forecast.forecastday[0].hour;
            console.log(list);
            setHrData(list);
            // setX([]);
            // setY([]);
    
            list.map((item)=> (
                setX((prev)=>{
                    return [...prev,item.time.split(" ")[1]];
                })
            ))
            list.map((item)=> (
                setY((prev)=>{
                    return [...prev,item.temp_c];
                })
            ))
        }
        catch(e){
            throw e;
        }
    }

    const getData = async (str)=>{
        try{
            setLoader(true);
            let api = `https://api.weatherapi.com/v1/current.json?key=4ac55578272a40fe963132616230904&q=${str}&aqi=yes`;
            const data = await (await fetch(api)).json();
            // console.log(data);
            setCity(data.location.name);
            setCountry(data.location.country);
            setIcon(data.current.condition.icon);
            setTemp(data.current.temp_c);
            setMsg(data.current.condition.text);
            setUpdate(data.current.last_updated); 
        }catch(err){
            throw err;
        }finally{
            setLoader(false);
        }
    }

    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition(async (position) => {
            setStatus(null);
            const {latitude,longitude} = position.coords;
            const str = latitude+","+longitude;
            setCityName(str);
            await getData(str);
            await getHourData(str);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }

    return (
        <div className="mainContainer">
            <div className="homepage">
                <SlidingWindow setState={setState} isPaneOpenLeft={isPaneOpenLeft}/>
                <Navbarr getHourData={getHourData} setState={setState} valid={valid} setValid={setValid}/>
                <SearchBar setnm={setnm} nm={nm} setCityName={setCityName} 
                    getData={getData} getHourData={getHourData} />
                {status && <button className="getLocationbtn" onClick={getLocation}>Grant Location Permission</button>}
                {!status && loader && <div className="custom-loader"></div>}
                {!status && !loader && <UpperDiv city={city} country={country} temp={temp} icon={icon} 
                    msg={msg} update={update}/>}
                {!status && !loader && valid && <HourwiseData hrData={hrData} x={x} y={y}/>}
            </div>
        </div>
    )
}

export default Home;