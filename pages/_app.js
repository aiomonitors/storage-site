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
                        body {
                            min-height: 100vh;
                            height: auto;
                            margin: 0 auto;
                            font-family: Avenir, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
                            background-color: #E5E5E5;
                            padding-top: 15px;
                        }
                    `}</style>
            </>

        )
    }
}

export default AppConfig;