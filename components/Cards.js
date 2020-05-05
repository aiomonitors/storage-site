import Flickity from 'react-flickity-component'
import { useRef , useEffect, Component} from 'react'

const flickityOptions = {
    cellSelector: '.gallery-cell',
    watchCSS: true,
    prevNextButtons: false,
    pageDots: false,
    freeScoll: true
}
 

class Carousel extends Component {
    state = {
        current: "0"
    }
    componentDidMount = () => {
        // You can register events in componentDidMount hook
        this.flkty.on('settle', () => {
            console.log(this.flkty.selectedIndex)
          this.setState({ current: this.flkty.selectedIndex})
        })
    }

    myCustomNext = () => {
        // You can use Flickity API
        this.flkty.next()
    }

    myCustomPrevious = () => {
        // You can use Flickity API
        this.flkty.previous()
    }

    render() {
        return (
            <div className="page">
                <div className="card" data-aos="zoom-in">
                    <div className="container">
                        <div className="heading">Testimonials</div>
                        <div className="slider">
                            <Flickity
                                flickityRef={c => this.flkty = c}
                                className={'carousel'} // default ''
                                elementType={'div'} // default 'div'
                                options={flickityOptions} // takes flickity options {}
                                disableImagesLoaded={false} // default false
                                static // default false
                            >
                                <div className="gallery-cell" data-aos="fade-left"></div>
                                <div className="gallery-cell" data-aos="fade-left"></div>
                                <div className="gallery-cell" data-aos="fade-left"></div>
                                <div className="gallery-cell" data-aos="fade-left"></div>
                                <div className="gallery-cell" data-aos="fade-left"></div>
                                <div className="gallery-cell" data-aos="fade-left"></div>
                                <div className="gallery-cell" data-aos="fade-left"></div>
                            </Flickity>
                        </div>
                        <div className="functions" data-aos="fade-up">
                            <div className="dots">
                                <div className={`dot ${this.state.current == 0 ? 'selected' : null}`}></div>
                                <div className={`dot ${this.state.current == 1 ? 'selected' : null}`}></div>
                                <div className={`dot ${this.state.current == 2 ? 'selected' : null}`}></div>
                                <div className={`dot ${this.state.current == 3 ? 'selected' : null}`}></div>
                                <div className={`dot ${this.state.current == 4 ? 'selected' : null}`}></div>
                                <div className={`dot ${this.state.current == 5 ? 'selected' : null}`}></div>
                            </div>

                            <div className="button-group--cells">
                                <button className="button--previous" onClick={this.myCustomPrevious}>&#8592;</button>
                                <button className="button--next" onClick={this.myCustomNext}>&#8594;</button>

                            </div>
                        </div>
                    </div>
            </div>
                <style jsx>{`
                    .page {
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                    }
                    .card {
                        background: #9C69E2;
                        height: 700px;
                        border-radius: 50px;
                        max-width: 300px;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: -1;
                    }

                    .slider {
                        height: 500px;
                        overflow-y: auto;
                    }

                    .container {
                        padding: 0px;
                        width: 100%;
                    }

                    .heading {
                        max-width: 100%;
                        width: 100%;
                        text-align: center;
                        height: 52px;
                        font-family: Helvetica;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 130%;
                        display: flex;
                        align-items: center;
                        color: #FFFFFF;
                        margin-left: 20px;
                    }

                    .slider {
                        margin-top: 100px;
                    }

                    .gallery-cell {
                        width: 400px;
                        height: 200px;
                        margin-right: 10px;
                        background: #8C8;
                        counter-increment: gallery-cell;
                        border-radius: 50px;
                        z-index: 100;
                    }

                    .gallery-cell {
                        margin-bottom: 10px;
                    }
                    
                    .gallery-cell.is-selected {
                        background: #ED2;
                    }
                    
                    /* cell number */
                    .gallery-cell:before {
                        display: block;
                        text-align: center;
                        content: counter(gallery-cell);
                        line-height: 200px;
                        font-size: 80px;
                        color: white;
                    }

                    .functions {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 90%;
                        padding-left: 100px;
                        padding-right: 100px;
                        margin-top: 100px;
                    }

                    button {
                        //background-color: black;
                        width: 100px;
                        height: 40px;
                        border-radius: 50px;
                        background-color: transparent;
                        border: none;
                        font-size: 30px;
                    }

                    .dots {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .dots .dot {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: black;
                    }

                    .dots .selected {
                        background-color: white;
                    }
                    
                    @media screen and (min-width:768px) {
                        .card {
                            max-width: 100%;
                            width: 100%;
                            display: block;
                        }

                        .slider {
                            height: 300px;
                            overflow-y: hidden;
                            overflow-x: hidden;
                        }
                    }
                `}</style>
            </div>

        )
    }
}
export default Carousel;