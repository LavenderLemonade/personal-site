import EtchComp from "./EtchComp";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className="content">
            <Header />
            <div className="torso">
                <Sidebar />
                <MainContent />
            </div>

        </div>

    );
}

export default Home;