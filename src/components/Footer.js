import { CiInstagram, CiFacebook } from "react-icons/ci";
import { IconContext } from "react-icons";

const instagramClick = (event) => {
    event.stopPropagation();
    window.open('https://www.instagram.com/tsofjp_official/', '_blank');
};
const facebookClick = (event) => {
    event.stopPropagation();
    window.open('https://www.facebook.com/groups/tsofjp/', '_blank');
};

const Footer = () => {
    return <div className="Footer">
        <IconContext.Provider value={{ size: 40}}>
            <div onClick={instagramClick} className="Copyright-info-container">
                <div>
                    © by  TSOFJP
                </div>
                <div className='info'>
                    <div onClick={instagramClick} className="item">
                        <CiInstagram color="#FB2576"/>
                    </div>
                    <div onClick={facebookClick} className="item">
                        <CiFacebook color="#0080FF"/>
                    </div>
                    
                </div>
            </div>
        </IconContext.Provider>
    </div>
}

export default Footer