import { Link } from "react-router-dom";

const MainContent = () => {
    return (
        <div className="stuff">
            <div className="top-left">
                <Link to='/projects/sketch'>
                    Top Left
                </Link>

            </div>

            <div className="top-right">
                Top Right
            </div>
            <div className="bottom-left">
                Bottom Left
            </div>
            <div className="bottom-right">
                Bottom Right
            </div>

        </div>

    );
}

export default MainContent;