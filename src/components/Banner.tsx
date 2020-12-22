import React, { FC } from 'react';
import './Banner.css';

const Banner: FC = () => {
    return (
        <div className='Banner'>
            <span className='Banner-message'>
                Congratulations 🎉, You've nominated 5 movies! Click <a href='#'>here</a> to see the
                current voting results <i className='fas fa-times'></i>
            </span>
        </div>
    );
};

export default Banner;
