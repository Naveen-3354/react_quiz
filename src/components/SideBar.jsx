
import { Link } from "react-router-dom"
import "../css/Sidebar.scss"
const SideBar = ({ options, handleButtonClick, activeButton }) => {

    return (
        <div id='SideBar'>
            <h1>Quiz Master</h1>
            <div className="options">
                {
                    options.map((data, index) => (
                        <Link to={data.link}>
                            <div onClick={() => handleButtonClick(index)} className={activeButton === index ? 'active content' : 'content'} key={index} >
                                {data.icon}
                                <span>{data.name}</span>
                            </div></Link>
                    ))
                }

            </div>
        </div>
    )
}

export default SideBar