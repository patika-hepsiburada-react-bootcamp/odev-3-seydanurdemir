import './Container.css';

import Question from './Question.js';
import Options from './Options.js';
import Result from './Result.js';
import Counts from './Counts.js';

import { useEffect } from 'react';
import { connectSocket } from '../socketApi';

function Container() {

    useEffect(() => {
        connectSocket();
    }, []);

    return (
        <div className="Container">
            <Question />
            <Options />
            <Result />
            <Counts />
        </div>
    );
}

export default Container;
