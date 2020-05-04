const Nav = () => {
    return (
        <div className="container" data-aos="fade-in">
            <div className="left">
                <div className="logo">
                    <div id="rect-left"></div>
                    <div id="rect-right"></div>
                </div>
                <div className="nav-links">
                    <a href="#about" className="active">About</a>
                    <a href="#about" className="active">Help</a>
                    <a href="#about" className="active">Features</a>
                    <a href="#about" className="active">Signup</a>
                </div>
            </div>

            <div className="right">
                <div className="button">Request a demo <div className="arrow">&#8594;</div></div>
            </div>

            <style jsx>{`
                .container {
                    width: 90vw;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .container .left {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .container .left .logo {
                    display: flex;
                    width: 100px;
                    flex-direction: row;
                    align-items: flex-end;
                }

                .container .left .logo #rect-left {
                    width: 20px;
                    height: 20px;
                    background: #9C69E2;
                    border-radius: 20px;
                }

                .container .left .logo #rect-right {
                    width: 20px;
                    height: 35px;
                    background: #F063B8;
                    border-radius: 20px;
                }

                .container .nav-links {
                    width: 322px;
                    display: flex;
                    justify-content: space-between;
                    display: none;
                }
                
                .container .nav-links > a {
                    width: 51px;
                    height: 26px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 160%;
                    color: #4B5D68;
                    text-decoration: none;
                }

                .container .nav-links .active {
                    color: #212353;
                }

                .container .button {
                    width: 210px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #FFFFFF;
                    box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 800;
                    letter-spacing: 0.005em;
                    color: #212353;
                }

                .container .button .arrow {
                    margin-left: 10px;
                    color: #9C69E2;
                }

                @media screen and (min-width: 728px) {
                    .container .nav-links {
                        width: 322px;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            `}</style>
        </div>
    )
}

export default Nav;