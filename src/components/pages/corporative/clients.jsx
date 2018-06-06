import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Slider from 'react-slick';
import {Image} from 'cloudinary-react';
import {PrevArrow, NextArrow} from '../../arrows';

class CorporativeClients extends Component {
    render() {

        return (
            <div className="clientes">
                <div className="container padding">
                    <Typography type="title" align="center" className="section-title" gutterBottom>
                        Alguns clientes que confiam <br /> no trabalho da vivalá
                    </Typography>

                    <div className="clients-images">
                        <div className="client-item">
                            <Image
                                cloudName="vivala"
                                publicId="Logos-Corporativo_2_nvb6ht.png"
                                crop="fit" alt=""
                                className=""
                                />
                        </div>

                        <div className="client-item">
                            <Image
                                cloudName="vivala"
                                publicId="Logos-Corporativo_3_bb8eay.png"
                                crop="fit" alt=""
                                className=""
                            />
                        </div>

                        <div className="client-item">
                            <Image
                                cloudName="vivala"
                                publicId="Logos-Corporativo_1_yru0il.png"
                                crop="fit" alt=""
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CorporativeClients;
