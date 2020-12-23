import React from 'react';
import './css/Loading.css';

const Loader: React.FC = () => {
    return (
        <div className='Loader'>
            <div id='loader-wrapper'>
                <div id='loader'></div>

                <div className='loader-section section-left'></div>
                <div className='loader-section section-right'></div>
            </div>
        </div>
    );
};

export default Loader;
