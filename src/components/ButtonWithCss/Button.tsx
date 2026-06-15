// import './Button.css'

import styles from './Button.module.css'
import { VscThumbsup } from "react-icons/vsc";

// function Button() {
//     return <button className="style-button">Click</button>
// }

function Button() {
    return <button className={[styles['button-style'],styles['another-style']].join(" ")}><VscThumbsup></VscThumbsup></button>
}

export default Button;