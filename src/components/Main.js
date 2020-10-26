import React, {useState} from 'react';
import chatting from "../images/chatting.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();

    const join = (e) => {
        e.preventDefault();
        if(joined != ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1)+ '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }
    }



    return(
        <React.Fragment>
            <header>
                <img src="{chatting}" alt="landing-page photo"/>
                <div>
                    <h1>Lavender Makes Sure You're Good</h1>
                    <p>Vibe with other students, connect with dope mental health counselors, take care of yourself</p>
                    <Link to="/contact">Get in touch</Link>
                </div>
            </header>

            <main>
                <section className="services">
                    <h2>Studying Is Stressful</h2>
                    
                    <div className="service-container">
                        <div className="service-card service-one">
                            <div className="service-description">
                                <h3>Especially When You're Representing A Rich Legacy</h3>
                                <div className="description-data-points">
                                    Black college students have committed suicide close to more than 140% since 1976.
                                    Colleges need to make sure resources are available in a personalized & tailored way.
                                </div>
                            </div>
                        </div>

                        <div className="service-container">
                            <div className="service-card service-two">
                                <div className="service-description">
                                    <h3>Especially When You're Representing A Rich Legacy</h3>
                                    <div className="description-data-points">
                                        Black college students have committed suicide close to more than 140% since 1976.
                                        Colleges need to make sure resources are available in a personalized & tailored way.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-container">
                            <div className="service-card service-three">
                                <div className="service-description">
                                    <h3>Especially When You're Representing A Rich Legacy</h3>
                                    <div className="description-data-points">
                                        Black college students have committed suicide close to more than 140% since 1976.
                                        Colleges need to make sure resources are available in a personalized & tailored way.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <h2>Sign Up When The App Is Launched</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your Email" onchange={(e) => setJoined(e.target.value)} />
                        <input type="submit" value="Join Now" />
                    </form>

                </section>
            </main>
        </React.Fragment>
    )
}

export default Main;