import React, { useState } from 'react'
import SelectBox from "./selectBox";
import DisplayBox from "./displayBox";

function Home() {
    const [job, setJob] = useState("frontend");

    return (
        <div className="container">
            <SelectBox job={job} setJobChange={setJob} />
            <DisplayBox job={job} />
        </div>
    )
}

export default Home;