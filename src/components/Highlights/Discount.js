import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Mybutton from '../utils/Mybutton';
class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }

    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}

                    >

                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>


                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets Before 5th August</h3>
                            <p>
                                Grab the Tickets ASAP. Limited Early Bird Tickets Available.
                                Tap the Below Box To Buy Tickets
                        </p>
                            <Mybutton
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="ffffff"
                                link="https://in.bookmyshow.com/"
                            />

                        </div>
                    </Slide>

                </div>

            </div>
        );
    }
}

export default Discount;



