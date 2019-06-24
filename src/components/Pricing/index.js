import React, { Component } from 'react';
import Mybutton from '../utils/Mybutton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [1599, 3999, 9999],
        //position: ['General', 'VIP', 'VVIP'],
        desc: ['Liquor and Beverages not included',
            'Liquor and Beverages include',
            'Food + Liquor + Meet and Greet with Celebrity'],
        delay: [500, 0, 500]

    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>
                                ₹{this.state.prices[i]}
                            </span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <Mybutton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                            >

                            </Mybutton>
                        </div>
                    </div>

                </div>
            </Zoom>

        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Pricing; 