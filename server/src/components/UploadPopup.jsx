import Popup from 'reactjs-popup';
import upload from './header.jsx'
import 'reactjs-popup/dist/index.css';


function Upload() {
    <Popup
        trigger={upload}
        position="right center"
    >
            <div>Popup content here !!</div>
    </Popup>
}


export default Upload