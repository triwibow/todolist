import emptyPng from "../../assets/icon/activity-empty-state.png";

const ButtonEmpty = () => {
    return (
        <button className="btn-empty-state mx-auto">
            <img src={emptyPng} alt="empty" />
        </button>
    )
}

export default ButtonEmpty;