import Layout from '../components/Layout'
import Nav from '../components/Nav';
import Headline from '../components/Headline';
import About from '../components/About';
import Features from '../components/Features';
const Index = () => {
    return (
        <Layout>
            <div className="container">
                <Nav />
                <Headline />
                <About />
                <Features />
            </div>
        </Layout>    
    )
}
export default Index;