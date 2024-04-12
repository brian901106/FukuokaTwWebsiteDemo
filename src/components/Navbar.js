import logo from './logo.webp';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div>
        <div className='Navbar'>
            <div className='Logo-container'>
                <Link to="/Home">
                    <img src={logo} alt='logo' className='Logo'/> 
                    <div className='Logo-discription'>
                    TSOFJP
                    </div>
                </Link>
            </div>


            
            <div className='Title-Routes-container'>
                <div className='Title'>
                    台灣在日福岡留學生會
                </div>
                <div className='Routes'>
                    <div className='Route'>
                        <Link to="/AboutUs">
                            關於本會
                        </Link>
                    </div>
                    <div className='Route'>
                        <Link to="/Event">
                            活動回顧
                        </Link>
                    </div>
                    <div className='Route'>
                        <Link to="/Blog">
                            留學生活
                        </Link>
                    </div>
                    <div className='Route'>
                        <Link to="/Contact">
                            聯繫我們
                        </Link>
                    </div>
                </div>

            </div>

        </div>

    </div>
}

export default Navbar