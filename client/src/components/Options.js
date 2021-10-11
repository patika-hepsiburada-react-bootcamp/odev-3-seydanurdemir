import './Options.css';
import React, { useState } from 'react';
import { useVote } from '../contexts/VoteContext';

function Options() {
    const [selected, setSelected] = useState("");
    const { /*options, setOptions,*/ setVote } = useVote();

    const onChange = (e) => {
        setSelected(e.target.value);
    }

    const countVote = () => {
        setVote(selected);
    }

    return (
        <div className="Options" id="options">
            <label htmlFor="">
                <input
                    name="option"
                    type="radio"
                    value="unix"
                    onChange={onChange}
                />
                UNIX
            </label>
            <br />
            <label htmlFor="">
                <input
                    name="option"
                    type="radio"
                    value="windows"
                    onChange={onChange}
                />
                WINDOWS
            </label>
            <br />
            <label htmlFor="">
                <input
                    name="option"
                    type="radio"
                    value="macos"
                    onChange={onChange}
                />
                MAC OS
            </label>
            <br />
            <br />
            <div>
                <button onClick={countVote}>SUBMIT</button>
            </div>
        </div>
    );
}

export default Options;
