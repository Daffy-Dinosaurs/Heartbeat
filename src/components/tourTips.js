import React, { Component } from 'react';
import { Link } from 'react-router';
import Tour from "react-user-tour";

export default class UserTour extends Component {

    constructor() {
        super();
        this.state = {
            isTourActive: true,
            tourStep: 1
        };
    }
    render() {
        return (
                <div >
                <Tour
                    active={this.state.isTourActive}
                    step={this.state.tourStep}
                    onNext={(step) => this.setState({tourStep: step})}
                    onBack={(step) => this.setState({tourStep: step})}
                    onCancel={() => this.setState({isTourActive: false})}
                    steps={[
                        {
                            step: 1,
                            selector: "#c20",
                            title: <div>WELCOME TO HEARTBEAT!</div>,
                            body: <div >Here you can click on any country to find out more about its poverty levels, water pollution index, and food security. </div>
                        },
                        {
                            step: 2,
                            selector: "#c20",
                            title: <div>Country List</div>,
                            body: <div>Click on any country to view it on the globe and read more about its statistics.</div>
                        },
                        {
                            step: 3,
                            selector: ".issues",
                            title: <div>ISSUES</div>,
                            body: <div>Click on an issue to see a color comparison of that issue on the globe!.</div>
                        },
                        {
                            step: 4,
                            selector: ".barSlider",
                            title: <div>SLIDER BAR</div>,
                            body: <div>Moving the slider bar changes the year. The colors on the globe also update to reflect that year.</div>
                        },
                        {
                            step: 5,
                            selector: ".newsfeed-feed",
                            title: <div>ICONS</div>,
                            body: <div>Click on a news feed icon to see what people are saying about a particular issue for a particular country.</div>
                        },
                        {
                            step: 6,
                            selector: ".land",
                            title: <div>GLOBE</div>,
                            body: <div>Drag the globe to browse regions of the world, and click on a country to learn more about that country.</div>
                        }
                    ]}
                />
            </div>
        );
    }
}
