import logo from './logo.webp';

const About = () => {
    return <div>
        <div className='About-Container'>
            <div className='About-Logo-discription-Container'>
                <div>
                    <img src={logo} alt='logo' className='About-Logo'/>
                </div>
                <div className='About-Logo-discription'>
                    TSOFJP
                </div>
            </div>
            <div className='About-title-info-container'>
                <div className='About-title'>
                    關於台灣在日福岡留學生會
                </div>
                <div className='About-info'>
                    我們是「台灣在日福岡留學生會」。Taiwanese Students’ Organization in Fukuoka, Japan (TSOFJP) 主要是生活在九州與山口地區的台灣留學生所組成的社團， 除了協助在這邊生活的台灣人外，積極與許多日本團體做文化上的交流。 歡迎九州與山口地區的台灣留學生們加入我們。
                </div>
            </div>
        </div>

    </div>
}

export default About