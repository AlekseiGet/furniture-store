import React from 'react';
import CartsMoney from './footer/CartsMoney';
import InfoFor from './footer/InfoFor';
import Requesites from './footer/Requesites';
import SocialNetwork from './footer/SocialNetwork';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="conteiner_footer">
                <div ><InfoFor/> </div>
                <div><SocialNetwork/> </div>
                <div><CartsMoney/> </div>
                <div><Requesites/> </div>
            </div>
        </div>
    );
};

export default Footer;