import App from 'next/app';
import Head from 'next/head'

import AOS from 'aos'
import 'aos/dist/aos.css'

class AppConfig extends App {
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Figma Design</title>
                </Head>
                    <Component {...pageProps} />

                    <style jsx global>{`

                        .carousel:after {
                            content: '';
                            height: 500px;
                            overflow-y: auto;
                        }
                        body {
                            min-height: 100vh;
                            height: auto;
                            margin: auto;
                            width: 100%;
                            font-family: Avenir, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
                            background-color: #E5E5E5;
                            padding-top: 15px;
                        }

                        .flickity-page-dots {
                            display: flex;
                            color: black;
                            justify-content: space-around;
                            list-style-type:none
                        }

                        .flickity-page-dots > li {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            background-color: black;
                        }

                        .flickity-page-dots .is-selected {
                            background-color: white;
                        }


                        @media screen and ( min-width: 768px ) {
                            /* disable Flickity for large devices */
                            .carousel:after {
                                content: 'flickity';
                                display: flex;
                                justify-content: flex-end;
                            }
                        }
                    `}</style>
            </>

        )
    }
}

export default AppConfig;