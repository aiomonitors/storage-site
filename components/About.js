const About = () => {
    return (
        <div className="container" data-aos="fade-in">
            <div className="card">
                <div className="img" data-aos="fade-right"></div>
                <div className="text" data-aos="fade-left">
                    <div className="heading">
                    We are a high-level
                    data 
                    storage bank
                    </div>
                    
                    <div className="para">
                    The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .card {
                    background: rgba(240, 99, 184, 0.15);
                    width: 300px;
                    height: 600px;
                    border-radius: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                    justify-content: space-between;
                }

                .card .img {
                    width: 300px;
                    height: 250px;
                    background: url(/about.png);
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }

                .card .text {
                    width: 280px;
                    height: 310px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .card .heading {
                    width: 280px;
                    height: 100px;
                    font-family: Helvetica;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 40px;
                    line-height: 130%;
                    display: flex;
                    align-items: center;
                    color: #212353;
                }

                .card .para {
                    width: 280px;
                    height: 170px;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 160%;
                    color: #4B5D68;
                }

                @media screen and (min-width: 728px) {
                    .container {
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
    
                    .card {
                        background: rgba(240, 99, 184, 0.15);
                        width: 1117px;
                        height: 560px;
                        border-radius: 50px;
                        flex-direction: row;
                        justify-content: center;
                    }
    
                    .card .img {
                        width: 477px;
                        height: 504px;
                        background: url(/about.png);
                        background-size: contain;
                    }
    
                    .card .text {
                        width: 475px;
                        height: 310px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
    
                    .card .heading {
                        width: 475px;
                        height: 100px;
                        font-family: Helvetica;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 40px;
                        line-height: 130%;
                        display: flex;
                        align-items: center;
                        color: #212353;
                    }
    
                    .card .para {
                        width: 474px;
                        height: 170px;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 160%;
                        color: #4B5D68;
                    }
                }
            
            `}</style>
        </div>
    )
}

export default About;