import React from 'react';
const currentYear = new Date().getFullYear();
function Footer(){
    return <p className='footer'>
        Copyright © DuniAfrika {currentYear}
    </p>
}
export default Footer;