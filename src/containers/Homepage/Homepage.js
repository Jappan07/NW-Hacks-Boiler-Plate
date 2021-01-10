import React, { Component } from "react"
import Wrapper from "../../hoc/Wrapper"
import classes from "./Homepage.module.css"
import Button from "../../components/UI/Button/Button"
import FavoriteIcon from '@material-ui/icons/Favorite';
import videoSvg from "../../assets/video-illustration.svg"
import codeSvg from "../../assets/code-illustration.svg"
import musicSvg from "../../assets/music-illustration.svg"
import teamLogo from "../../assets/Hacker house.png"
import anushProfile from "../../assets/anush.jpeg"
import jappanProfile from "../../assets/jappan.jpeg"
import vedantProfile from "../../assets/vedant.jpeg"
import riteshProfile from "../../assets/ritesh.jpeg"
import WebcamStream from "../WebRTC/WebcamStream"

class Homepage extends Component {
    state = {
        name: null
    }
    continueApplyHandler = () => {
        this.props.history.push("/playground")
    }
    render() {
        return (
            <Wrapper>
                <div id="hero" className={classes.Hero}>
                    <div className={classes.Content}>
                        <h1>Convert Gestures to <span className={classes.AnimateMusic}>Music</span></h1>
                        <div className={classes.Button}>
                            <Button color="secondary" variant="outlined" clicked={this.continueApplyHandler}>Get Started</Button>
                        </div>
                    </div>
                </div>
                <section className="site-section-1">
                    <div className={classes.CompanyFeaturesSection}>
                        <h1 data-aos="fade-down" data-aos-offset="10">
                            How it Works?
                        </h1>
                        <div className={classes.Features}>
                            <div className={classes.CompanyFeature} data-aos="zoom-in">
                                <div className={classes.FeatureContent}>
                                    <img src={videoSvg} alt="illustration" />
                                    <p>Model trains on input.</p>
                                </div>
                            </div>
                            <div id={classes.icon} data-aos="fade-right" data-aos-delay="200">→</div>
                            <div className={classes.CompanyFeature} data-aos="zoom-in" data-aos-delay="100">
                                <div className={classes.FeatureContent}>
                                    <img src={codeSvg} alt="illustration" />
                                    <p>Sonic Pi code gets generated through the video</p>
                                </div>
                            </div>
                            <div id={classes.icon} data-aos="fade-right" data-aos-delay="400">→</div>
                            <div className={classes.CompanyFeature} data-aos="zoom-in" data-aos-delay="200">
                                <div className={classes.FeatureContent}>
                                    <img src={musicSvg} alt="illustration" />
                                    <p>Music is produced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="site-section-2">
                    <div id="contact-us" className={classes.ContactUs}>
                        <h1 data-aos="zoom-in">Contact Us</h1>
                        <div className={classes.ProfileSection}>
                            <div className={classes.ProfileBox} data-aos="fade-right" data-aos-delay="0">
                                <div className={classes.Author}>
                                    <img src={anushProfile} alt="Anush Krishna" />
                                    <div>
                                        <a href="https://www.linkedin.com/in/anush-krishna-v-8270941a0/" target="_blank" rel="noreferrer"><h5>Anush Krishna V</h5></a>
                                        <span>ML Enthusiast</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.ProfileBox} data-aos="fade-right" data-aos-delay="50">
                                <div className={classes.Author}>
                                    <img src={jappanProfile} alt="Jappanjeet Singh" />
                                    <div>
                                        <a href="https://www.linkedin.com/in/jappanjeet-singh/" target="_blank" rel="noreferrer"><h5>Jappanjeet Singh</h5></a>
                                        <span>Frontend Developer</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.ProfileBox} data-aos="fade-right" data-aos-delay="150">
                                <div className={classes.Author}>
                                    <img src={vedantProfile} alt="Vedant Khairnar" />
                                    <div>
                                        <a href="https://www.linkedin.com/in/vedantkhairnar/" target="_blank" rel="noreferrer"><h5>Vedant Khairnar</h5></a>
                                        <span>ML Enthusiast</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.ProfileBox} data-aos="fade-right" data-aos-delay="250">
                                <div className={classes.Author}>
                                    <img src={riteshProfile} alt="Ritesh Bucha" />
                                    <div>
                                        <a href="https://www.linkedin.com/in/bucharitesh/" target="_blank" rel="noreferrer"><h5>Ritesh Bucha</h5></a>
                                        <span>Full Stack Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="footer">
                    <div className={classes.TeamContainer}>
                        <span className={classes.HHLogo}><img src={teamLogo} alt="Hacker House logo" /></span>
                        <h1>Created with <FavoriteIcon style={{ fontSize: "20px", position: "relative", top: "3px" }} className={classes.Heart} /> by team HACKER HOUSE</h1>
                        <p>Copyright © 2021-3010</p>
                    </div>
                </section>
                {/* <WebcamStream /> */}
            </Wrapper>
        )
    }
}

export default Homepage