import React from 'react';

import './contact.scss'
import contact from '../../api/contact'

import Helmet from '../../components/helmet/Helmet'
import ContactInfo from '../../components/contact-info/ContactInfo'

// import MapBox from '../../components/MapBox'

const Contact = () => {
    return (
        <Helmet title='Liên hê'>
            <div className='contact'>
                <div className='contact__name'>Hãy liên hệ với chúng tôi</div>
                <div className='contact__img'>
                    <img src="https://dien-thoai-dns.000webhostapp.com/FE/img/lienhe-mid1.jpg" alt=''/>
                    <img src="https://dien-thoai-dns.000webhostapp.com/FE/img/lienhe-mid2.jpg" alt=''/>
                </div>
                <div className='contact__info'>
                    <div className='contact__left'>
                        {
                            contact.map(item => (
                                <ContactInfo 
                                    key={item.id}
                                    icon={item.icon}
                                    name={item.name}
                                    title={item.title}
                                />
                            ))
                        }
                    </div>
                    <div className='contact__right'></div>
                </div>
                {/* MAP */}
                <div className='contact__map'>
                    {/* <MapBox /> */}
                    <iframe className='contact__map__img' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d20075301.77929!2d64.90506341531915!3d52.105240810222504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x42d80be951645453%3A0x236d3728a1033db8!2sDNS%2C%20Prospekt%20Kuznetskiy%2C%2033%D0%90%2C%20Kemerovo%2C%20Kemerovo%20Oblast%2C%20Nga%2C%20650000!3m2!1d55.357724999999995!2d86.06653999999999!5e0!3m2!1svi!2s!4v1644394979952!5m2!1svi!2s" 
                    width="600" height="450" style={{ border: 0}}loading="lazy"></iframe>
                </div>
                {/* FOOTER */}
                <div className='contact__footer'>
                    <div className='contact__footer__name'>Electronics</div>
                    <div className='contact__footer__title'>
                    If you're considering a new laptop, looking for a powerful new car
                    stereo or shopping for a new HDTV, we make it easy to find exactly
                    what you need at a price you can afford. We offer Every Day Low
                    Prices on TVs, laptops, cell phones, tablets and iPads, video games,
                    desktop computers, cameras and camcorders, audio, video and more.
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Contact;
