import About from './components/About'
import Organization from './components/Organization'
import Member from './components/Member'

import './index.css'


const AboutUs = () => {
    return <div className='MainContents'>
        <About />
        <Organization />
        <Member />

    </div>
}

export default AboutUs