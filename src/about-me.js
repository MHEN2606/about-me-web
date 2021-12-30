import picture from './matthew.jpg';
const AboutMe = () =>{
    const title = "About Me";
    const age = 2021 - 2003
    return(

        <>
        <h1>{title}</h1>

        <div className="column">
            <div>
                <img src={picture} alt='matthew-mahendra' width="400px" heigth="700px"></img>
            </div>

            <div>
                <p>
                    An enthusiastic student who thinks he is the Duke of Wellington because of a hooky nose. Hi I'm Matthew Mahendra. I'm an undergraduate
                    student majoring in Informatics at Bandung Institute of Technology, Jatinangor Campus. I'm currently learning about ReactJS and this web
                    was also created with ReactJS. So Informatics (or computer science if you're an American) to me is quite important because it shapes the future
                    I mean, what kind of work could get done in the 21st century, even my campus started online learning due to COVID. I also have a fond with computers
                    since I was a toddler when my parents showed me a desktop computer. It was fun and I think the path to my future has been written that day.
                </p>
                <p>
                    Besides web-developing, I can also script using LaTeX, do something with Python or Jupyter Notebook, and singing. Yes singing is my leisure activity. I once joined
                    a choir group for 6 years straight. Well I hope you enjoy this website. Contact me if you have any opinion on this website.
                </p>
            </div>
        </div>
        </>
    );
}

export default AboutMe