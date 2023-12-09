import { Link } from "react-router-dom"
import "../Header.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function uploadVlog() {

}

function uploadBlog() {


}

function uploadImage() {

}

function Navbar() {
    return (
        <nav className="header">
        <Link to="/" className="site-title">
            Home
        </Link>
        <ul>
            <Popup trigger={<button>Upload</button>} position="right center">
                <button onClick={uploadVlog}>Vlog</button>
                <button onClick={uploadBlog}>Blog</button>
                <button onClick={uploadImage}>Image</button>
            </Popup>
        </ul>
        </nav>
    )
}

export default Navbar