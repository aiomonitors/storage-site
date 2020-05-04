const Layout = props => {
    return (
        <div className="container">
            {props.children}

            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    width: 100vw;
                }
            
            `}</style>
        </div>
    )
}

export default Layout;