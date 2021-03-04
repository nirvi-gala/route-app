import React from 'react'

function SelectBox({ job, setJobChange }) {
    return (
        <div className="select">
           <select value={job} onChange={(e) => setJobChange(e.target.value)}>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="mobile">Mobile Developer</option>
                <option value="game">Game Developer</option>
            </select>
        </div>
    )
}

export default SelectBox
