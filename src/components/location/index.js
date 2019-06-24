import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10347.10340384768!2d72.81000526930139!3d18.98861593360909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6ce08c6304dcc32!2sMahalakshmi+Race+Course!5e0!3m2!1sen!2sin!4v1561120903466!5m2!1sen!2sin"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                allowfullscreen></iframe>
            <div className="location_tag">
                <div>Location</div>

            </div>
        </div>
    );
};

export default Location;