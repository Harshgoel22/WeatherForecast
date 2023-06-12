import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props){
    return(
        <div className="searchBar">
            <form>
                <input className="inputfield" type="text" value={props.nm} onChange={(event)=>{
                    const value = event.target.value;
                    props.setnm(value);    
                }} placeholder="Enter your city"></input>
                
                <button className="submitbutton" onClick={(event)=>{
                    event.preventDefault();
                    props.setCityName(props.nm);
                    props.getData(props.nm);
                    props.getHourData();
                    props.setnm("");
                }} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} shake /></button>
            </form>
        </div>
    );
}

export default SearchBar;