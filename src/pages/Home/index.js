import PhotoPlayer from './components/PhotoPlayer'
import News from './components/News'
import './index.css'


const Home = () => {
    return <div className='MainContents'>
        <PhotoPlayer />
        <News />
    </div>
}

export default Home