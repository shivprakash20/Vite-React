import { useState } from 'react';
import PropTypes from "prop-types";
import './Greeting.scss';

const Greeting = (props) => {

    // Using useState Hook to manage state
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    // Function to update the date and time
    const updateDateTime = () => {
        setDateTime(new Date().toLocaleString());
    };

    return (
        <div className="card greeting-card" style={{ width: "18rem" }}>
            <img src="../../../images/watch.jpg" className="card-img-top" alt="watch_image"/>
            <div className="card-body">
                <h5 className="card-title">{props.message}</h5>
                <p className='card-text'>Current Date and Time: {dateTime}</p>
                <button type="button" className="btn btn-primary" onClick={updateDateTime} >Update Now</button>
            </div>
        </div>       
    );
};

Greeting.propTypes = {
    message: PropTypes.string.isRequired
};


export default Greeting;