import './LeaderBoards.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const LeaderBoards: FC = () => {
    return (
        <div>
            <h1>LeaderBoards</h1>
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default LeaderBoards;
