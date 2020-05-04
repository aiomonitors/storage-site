const Layout = props => {
    return (
        <div className="container">
            {props.children}

            <style jsx global>{`
                body {
                    min-height: 100vh;
                    max-width: 1440px;
                    overflow-x: hidden;
                    padding-right: 20px;
                    padding-left: 20px;
                    margin: 0 auto;
                    font-family: Avenir, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
                    color: white;
                }
            `}</style>

            <style jsx>{`.container {display: flex; justify-content: center;}`}</style>
        </div>
    )
}

export default Layout;