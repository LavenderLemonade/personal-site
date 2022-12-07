import { useState } from "react";
import SketchOptions from "./SketchOptions";

const EtchComp = () => {

    const [showing, setShowing] = useState(true);

    const clickDecision = () => {
        prompt('How many squares?');
    }

    return (
        <div className="bigBox">
            <SketchOptions clickDecision={clickDecision} />
        </div>
    );
}

export default EtchComp;