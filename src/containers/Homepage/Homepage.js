import React, { Component } from "react"
import Wrapper from "../../hoc/Wrapper"
import classes from "./Homepage.module.css"
import Button from "../../components/UI/Button/Button"
import videoSvg from "../../assets/video-illustration.svg"
import codeSvg from "../../assets/code-illustration.svg"
import musicSvg from "../../assets/music-illustration.svg"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
                <div className={classes.Hero}>
                    <div className={classes.Content}>
                        <h1>Convert Gestures to <span className={classes.AnimateMusic}>Music</span></h1>
                        <div className={classes.Button}>
                            <Button color="secondary" variant="outlined" clicked={this.continueApplyHandler}>Get Started</Button>
                        </div>
                    </div>
                </div>
                <section className="site-section-1">
                    <div className={classes.CompanyFeaturesSection}>
                        <h1>
                            How it Works?
                        </h1>
                        <div className={classes.Features}>
                            <div className={classes.CompanyFeature}>
                                <div className={classes.FeatureContent}>
                                    <img src={videoSvg} alt="illustration" />
                                    <p>Model trains on input.</p>
                                </div>
                            </div>
                            <div id={classes.icon}>→</div>
                            <div className={classes.CompanyFeature}>
                                <div className={classes.FeatureContent}>
                                    <img src={codeSvg} alt="illustration" />
                                    <p>Sonic Pi code gets generated through the video</p>
                                </div>
                            </div>
                            <div id={classes.icon}>→</div>
                            <div className={classes.CompanyFeature}>
                                <div className={classes.FeatureContent}>
                                    <img src={musicSvg} alt="illustration" />
                                    <p>Music is produced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Wrapper>
        )
    }
}

export default Homepage