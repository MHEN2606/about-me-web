import logo from './logo-matt.png';
const AboutMe = () =>{
    const title = "About Me";
    const age = 2021 - 2003
    return(

        <><h1>{title}</h1>

        <div className="column">
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG6Iacmk5bpAQ/profile-displayphoto-shrink_200_200/0/1632934624732?e=1645056000&v=beta&t=8tzJ_Ydgxh6oPRANvW5KZjs4T1Hu9pLA0gptx-M0t50" alt='logo matthew'></img>
            </div>

            <div>
                Matthew Mahendra was born in Jakarta at 26th of June 2003, he is currently {age} years old. A Computer Science/Informatics student at Bandung Institute of Technology, he was admitted in 2021 as an undergraduate student. Currently, he is interested in ReactJS and Python in web development.
            </div>
        </div>
        </>
    );
}

export default AboutMe