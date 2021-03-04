import React from 'react'

const jobDesc = {
    "frontend" : "Frontend developers specialise in visual user interfaces, aesthetics and layouts. They work on creating web apps and websites as their codes run on web browsers and on the computer of the site user. Their role is solely focused on understanding human machine interaction and design more than theory. Their skills consist of design of user interface (UI), design of user experience (UX), CSS, JavaScript, HTML, UI Frameworks.",
    "backend" : "The backend developer specialises in design, implementation, functional logic and performance of a system that runs on a machine which are remote from the end-user. The back end of a website is made up from a server, application and a database and a back-end developer helps to build and maintain these components. By doing this they are enabling user-facing side of a website to exist. Their development skills are Java, C++, Ruby, Python, Scala and Go.",
    "fullstack": "A full stack developer does both the front end and back end work for a site. They have the skills which are required to create a fully functioning website. Being a full stack developer will open up more opportunities for yourself as they work on both the server side and client side. The skills a full stack developer would consist of a combination of a front end and back end developer. A full stack developer should be able to set up Linux servers, write server-side APIs, client-side JavaScript powering an application and turn a design eye to CSS.",
    "mobile": "Mobile developers write codes for applications that run on mobile devices such as tablets and smartphones. Mobile developers only started to become popular after the boom of mobile devices in the early 2000s and the growth of the smartphone market. A mobile developer understands mobile operating systems such as iOS and android and the environment and frameworks used to create software on these systems. They have a variety of development skills, such as Java, Swift, Objective-C, Application Programming Interfaces, web development languages and cross platform mobile suites.",
    "game": "Being a game developer is very demanding and complicated. They specialise in writing games and have specific knowledge and skills in designing engaging interactive gaming experiences. Game developers use frameworks such as DirectX, OpenGL, Unity 3D, WebGL and programming languages such as C, C++ and Java. On mobile devices, Swift and Java are used for iOS and Android games.",
}

function DisplayBox({ job }) {
    let description = jobDesc.hasOwnProperty(job) && jobDesc[job] ? jobDesc[job] : false;
    return (
        description ? 
            <div>
                {description}
            </div> 
        : <p>Select a valid Job</p>
    )
}

export default DisplayBox;
