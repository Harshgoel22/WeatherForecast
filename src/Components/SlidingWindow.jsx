import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import "./sliding_window.css";

function SlidingWindow(props){
    
    return (
        <SlidingPane
        closeIcon={<div className="close_bar_div">
            <FontAwesomeIcon icon={faCircleXmark} shake className="close_bar_slider"/>
            <p>Close</p>
        </div>}
        isOpen={props.isPaneOpenLeft}
        // title="Close"
        from="left"
        width="200px"
        onRequestClose={() => props.setState(false)}
      >
        <div className='link_class'>
            <button className="link_slider">Login</button><br/>
            <button className="link_slider">Signup</button>
        </div>
      </SlidingPane>
    );
}

export default SlidingWindow;