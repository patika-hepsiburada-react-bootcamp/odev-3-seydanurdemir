import './Counts.css';
import React from 'react';
import { useVote } from '../contexts/VoteContext';

function Counts() {
    const { options } = useVote();

    return (
        <div className="Counts">
            {Object.entries(options).map(d =>
                <h4>{d[0]} : {d[1]}</h4>
            )}

            <br />
            Total vote : {Object.entries(options).map(d => d[1]).reduce((a, b) => a + b)}
        </div>
    );
}

export default Counts;
