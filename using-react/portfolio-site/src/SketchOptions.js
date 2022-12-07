const SketchOptions = ({ clickDecision }) => {

    return (
        <div className="top">
            <button onClick={() => clickDecision()}> Click Here </button>
        </div>
    );
}

export default SketchOptions;