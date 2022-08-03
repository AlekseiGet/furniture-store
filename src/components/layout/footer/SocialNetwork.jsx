import React from 'react';
import maill from "../../../img/envelope_footer.png";
import socialIcons from "../../../img/social_icons_new.png";

const SocialNetwork = () => {
    return (
        <div className="social_network">
            <h3 >Присоединяйтесь</h3>
            <div className="social_block">
                <div className="social_network_icon vk">
                    <a href="https://vk.com/">
                        <img src={socialIcons} alt="ups" />
                    </a>
                </div>
                <div className="social_network_icon ok">
                    <a href="https://ok.ru/">
                        <img src={socialIcons} alt="ups" />
                    </a>
                </div>
                <div className="social_network_icon tg">
                    <a href="https://web.telegram.org/k/">
                        <img src={socialIcons} alt="ups" />
                    </a>
                </div>
                <div className="social_network_icon wa">
                    <a href="https://www.whatsapp.com/?lang=ru">
                        <img src={socialIcons} alt="ups" />
                    </a>
                </div>
           </div>
            <div className="social_maill">
                <img src={maill} alt="ups" />
                <a href="https://mail.ru/">.bikert@mail...</a>
            </div>
        </div>
    );
};

export default SocialNetwork;