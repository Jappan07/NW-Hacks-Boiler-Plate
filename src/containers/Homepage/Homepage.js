import React, { Component } from "react"
import Wrapper from "../../hoc/Wrapper"
import classes from "./Homepage.module.css"
import Button from "../../components/UI/Button/Button"

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
                        <h1>Convert Gestures to Music</h1>
                        <div className={classes.Button}>
                            <Button color="secondary" variant="outlined" clicked={this.continueApplyHandler}>Get Started</Button>
                        </div>
                    </div>
                </div>
                {/* <section className="site-section-1">
                    <div className={classes.CompanyFeaturesSection}>
                        <h1>
                            How it Works?
                        </h1>
                        <p className={classes.Text}>With just few clicks, students can send their applications to academic programs at multiple institutions. <span>No need to apply by standing for hours in a queue.</span></p>
                        <div className={classes.Features}>
                            <div className={classes.CompanyFeature}>
                                <AccountCircleIcon className={classes.Icon} />
                                <h3>1:PROFILE</h3>
                                <p>Complete sign up process to make your Find My School Account.</p>
                            </div>
                            <RedoIcon style={{ "color": "#ffe6e6", "fontSize": "5.5rem", "marginBottom": "100px" }} className={classes.RedoIcon} />
                            <div className={classes.CompanyFeature}>
                                <PostAddIcon className={classes.Icon} />
                                <h3>2:FILL APPLICATION</h3>
                                <p>Fill the application form with all the details. This will make a generic profile of you which you can use to apply to multiple institutions</p>
                            </div>
                            <RedoIcon style={{ "color": "#ffe6e6", "fontSize": "5.5rem", "marginBottom": "100px" }} className={classes.RedoIcon} />
                            <div className={classes.CompanyFeature}>
                                <SchoolIcon className={classes.Icon} />
                                <h3>3:PREDICT</h3>
                                <p>Our Machine Learning Model will predict the best college for you.</p>
                            </div>
                        </div>
                    </div>
                </section> */}

            </Wrapper>
        )
    }
}

export default Homepage