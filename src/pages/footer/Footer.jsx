import React, { useCallback } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaCalendarAlt, FaPhone, FaQuestionCircle, FaUserFriends, FaHandshake, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { Link, useNavigate } from 'react-router-dom';
import './footer.css'
function Footer() {
    // const navigate = useNavigate();
    // const   handleOnClickOurStory= useCallback(() => navigate('/OurStory', {replace: true}), [navigate]);
    // const   handleOnClickFaq= useCallback(() => navigate('/Faq', {replace: true}), [navigate]);
    // const   handleOnClickBook1= useCallback(() => navigate('/Bookstep1', {replace: true}), [navigate]);
    // const   handleOnClickContribute= useCallback(() => navigate('/contribute', {replace: true}), [navigate]);
 
    return (
        <div className='end-section'>
            <table>
                <tr>
                    <th >עוד עלינו</th>
                    <th>צרו קשר</th>
                    <th></th>
                </tr>
                <tr>
                    <td >שאלות ותשובות <FaQuestionCircle className='faq'  /></td>
                    <td>054-1234567 <FaPhone className='phone' /></td>
                </tr>
                <tr>
                    <td >הצטרפו אלינו <FaUserFriends className='join' /></td>
                    <td>Hakayak@gmail.com <MdEmail className='mail' /></td>
                </tr>
                <tr>
                    <td className='social-media-icons'>
                    </td>
                </tr>
            </table>
            <span className='social-media-icons'>
                <FaFacebook className='facebook' />
                <FaInstagram className='instagram' />
                <FaYoutube className='youtube' />
            </span>
        </div>
    );
}
export default Footer;

