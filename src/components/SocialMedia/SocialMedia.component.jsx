import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

import {LinkItems, LinkItem} from './SocialMedia.styles';

const SocialMedia = () => (


    <LinkItems>
        <LinkItem target="_blank" to='//www.instagram.com/pramod_boda/'><FaInstagram/></LinkItem>
        <LinkItem target="_blank" to='//www.linkedin.com/in/pramodkumarboda/'><FaLinkedin/></LinkItem>
        <LinkItem target="_blank" to='//www.github.com/pramodboda'><FaGithub/></LinkItem>
    </LinkItems>

)

export default SocialMedia;