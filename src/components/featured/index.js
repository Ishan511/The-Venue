import React from 'react';
import Corrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{
            position: 'relative'
        }}>
            <Corrousel></Corrousel>
            <div className="artist_name"
                style={{
                    height: 110
                }}>
                <div className="wrapper"
                    style={{
                        height: 70
                    }}>
                    Eminem
                </div>

            </div>
            <TimeUntil />
        </div>
    );
};

export default Featured;