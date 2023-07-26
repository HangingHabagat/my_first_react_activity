import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main from '../Components/Main'

const RootLayout = () => {
    
    return (
        <div className="root-main">
            <Header></Header>
            <Main cdata={children}> </Main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;