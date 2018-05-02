import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Logo from '../../../assets/images/home/logo_instituto.png';
import {PrevArrow, NextArrow} from '../../arrows';

class InstitutoSlider extends Component {
    renderItems = () => {
        return this.props.expeditions.map((expedition, key) => {
            return <div key={`expedicao-${key}`} style={{ backgroundImage: `url(${expedition.image})` }}>
            </div>
        })
    }

    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ],
            adaptativeHeight: false,
            variableWidth: true,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            prevArrow: <PrevArrow white />,
            nextArrow: <NextArrow white />,
            speed: 500
        }

        return (
            <div className="instituto-vivala">
                <div className="container">
                    <div className="home-instituto-slick-container">
                        <div className="instituto-vivala-logo-container">
                            <img src={Logo} alt="Instituto Vivalá" className="instituto-vivala-logo"/>
                        </div>
                        <Slider {...settings} className="slidinho">
                            {this.renderItems()}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

InstitutoSlider.propTypes = {
    expeditions: PropTypes.array,
};

export default InstitutoSlider;
