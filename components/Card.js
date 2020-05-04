const Card = props => {
    return (
        <div className="container" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
            <div className="img"></div>
            <div className="text-container">
                <div className="heading">
                    Search Data
                </div>
                <div className="para">
                Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
                </div>
                <div className="learn">
                    Learn More
                    <div className="arrow"></div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 531.29px;
                    height: 388px;
                    position: relative;
                    //border: 1px solid red;
                }

                .container .img {
                    width: 232px;
                    height: 211px;
                    background: url(/imagecard.png);
                    position: relative;
                    top: 25%;
                    left: 5%;
                    z-index: 100;
                    //border: 1px solid pink;
                }

                .container .text-container {
                    width: 442px;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    height: 358px;
                    background: url(${props.src});
                    background-size: contain;
                    background-repeat: no-repeat;
                    position: relative;
                    left: 15%;
                    bottom: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    z-index: 100;
                    
                }

                .container .text-container .heading {
                    width: 200px;
                    height: 50px;
                    font-family: Helvetica;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 130%;
                    display: flex;
                    align-items: center;
                    color: #212353;
                    margin-right: 40px;
                }

                .container .text-container .para {
                    width: 200px;
                    height: 160px;
                    font-size: 16px;
                    line-height: 160%;
                    color: #4B5D68;
                    margin-right: 40px;
                    text-align: left;
                }

                .learn {
                    width: 200px;
                    height: 50px;
                    text-align: left;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-right: 40px;
                    margin-top: 40px;
                }
                .arrow {
                    width: 22px;
                    height: 15px;
                    background: url(/arrow.png);
                    background-size: contain;
                    margin-left: 10px;
                }
            `}</style>
        </div>
    )
}

export default Card;