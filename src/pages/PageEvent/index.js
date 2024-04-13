import PartAEvent from './components/PartAEvent'
import PartBEvent from './components/PartBEvent'
import PartCEvent from './components/PartCEvent'
import PartDEvent from './components/PartDEvent'
import './index.css'


const Event = () => {
    return <div className='MainContents'>
        <PartAEvent />
        <PartBEvent />
        <PartCEvent />
        <PartDEvent />

    </div>
}

export default Event