const Headline = () => {
    return (
        <div className="container" data-aos="fade-up">
            <div className="text" data-aos="fade-right">
                <div className="heading">
                    Save your data storage here.
                </div>
                <div className="para">
                    Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                </div>
                <div className="button">
                    Learn More
                </div>  
            </div>

            <div className="image" data-aos="fade-up-left">
            </div>
            <style jsx>{`
                .container {
                    height: calc(100vh - 160px);
                    //border: 1px solid red;
                    padding: 40px;
                }

                .container .text {
                    width: 300px;
                    height: 464px;
                    text-align: left;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    //border: 1px solid red;
                    z-index: 100;
                }
                
                .container .text .heading {
                    width: 300px;
                    height: 184px;
                    font-family: Helvetica;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 110%;
                    display: flex;
                    align-items: center;
                    color: #212353;
                    text-align: left;
                }

                .container .text .para {
                    width: 300px;
                    height: 120px;
                    font-family: Avenir;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 160%;
                    color: #4B5D68;
                }

                .container .button {
                    width: 170px;
                    height: 60px;
                    background: #9C69E2;
                    border-radius: 50px;
                    font-family: Avenir;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 160%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #FFFFFF;
                }

                .container .image {
                    width: 300px;
                    height: 100%;
                    background: url(/headerimg.png);
                    background-size: contain;
                    background-repeat: no-repeat;
                    position: relative;
                    bottom: 40%;
                    left: 30%;
                    z-index: -1;
                    opacity: 0.5;
                }

                @media screen and (min-width: 728px) {
                    .container .text {
                        width: 645px;
                        height: 464px;
                    }
                    
                    .container .text .heading {
                        width: 645px;
                        height: 184px;
                        font-size: 80px;
                    }
    
                    .container .text .para {
                        width: 380px;
                        height: 120px;
                    }

                    .container .image {
                        height: 468px;
                        width: 885px;
                        background: url(/headerimg.png);
                        position: relative;
                        bottom: 60%;
                        left: 30%;
                        z-index: -1;
                        opacity: 0.5;
                        background-size: contain;
                        //border: 1px solid red;
                    }
                }
            `}</style>
        </div>
    )
}
export default Headline;