import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="bar">
            <div className="container">
            <div className="news">News</div>
            <div className="menubar">
                <div className="menuitem"><a href="">Home</a></div>
                <div className="menuitem"><a href="">War in Ukraine</a></div>
                <div className="menuitem"><a href="">Coronavirus</a></div>
                <div className="menuitem"><a href="">Climate</a></div>
                <div className="menuitem"><a href="">Video</a></div>
                <div className="menuitem"><a href="">World</a></div>
                <div className="menuitem"><a href="">UK</a></div>
                <div className="menuitem"><a href="">Business</a></div>
                <div className="menuitem"><a href="">Tech</a></div>
                <div className="menuitem"><a href="">More</a></div>
            </div>
            </div>
        </div>
    )
}

export default Navbar