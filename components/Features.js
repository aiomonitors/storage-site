import Card from './Card'

const Features = () => {
    return (
        <div className="container">
            <div className="header" data-aos="fade-up">
                <div className="heading">Features</div>
                <div className="caption">
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </div>
            </div>

            <div className="cards">
                <Card src="/rectgreen.png"/>
                <Card src="/rectpurp.png"/>
                <Card src="/rectgreen.png"/>
                <Card src="/rectpurp.png"/>
            </div>
            <style jsx>{`
                .container {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    padding-bottom: 30px;
                    //border: 1px solid blue;
                }
                .header {
                    height: 160px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                .heading {
                    font-family: Helvetica;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 25px;
                    line-height: 130%;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #212353;
                }

                .caption {
                    width: 280px;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 160%;
                    text-align: center;
                    color: #4B5D68;
                }

                .cards {
                    max-width: 450px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    margin-top: 40px;
                    //border: 1px solid blue;
                }

                @media screen and (min-width: 728px) {
                    .heading {
                        font-size: 40px;
                    }
    
                    .caption {
                        width: 584px;
                        font-weight: 500;
                        font-size: 18px;
                    }
    
                    .cards {
                        max-width: 1200px;
                        min-height: 500px;
                    }
                }

            
            `}</style>
        </div>
    )
}

export default Features