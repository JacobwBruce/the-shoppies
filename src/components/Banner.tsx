import React, { FC, useContext } from 'react';
import { MyContext } from '../App';
import './Banner.css';

const Banner: FC = () => {
    //@ts-ignore
    const { closeBanner } = useContext(MyContext);

    return (
        <div className='Banner'>
            <span className='Banner-message'>
                Congratulations 🎉, You've nominated 5 movies! Click{' '}
                <a href='#' className='Banner-link'>
                    here
                </a>{' '}
                to see the current voting results{' '}
                <i className='fas fa-times Banner-times' onClick={closeBanner}></i>
            </span>
        </div>
    );
};

export default Banner;
