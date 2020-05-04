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
            </div>
            <div className="cards">
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
                    font-size: 40px;
                    line-height: 130%;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #212353;
                }

                .caption {
                    width: 584px;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 160%;
                    text-align: center;
                    color: #4B5D68;
                }

                .cards {
                    height: 500px;
                    display: flex;
                    flex-flow: row-wrap;
                    justify-content: space-between;
                    align-items: center;
                    //border: 1px solid blue;
                }

            
            `}</style>
        </div>
    )
}

export default Features