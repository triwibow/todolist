const ButtonEmpty = (props) => {
    return (
        <button className="btn-empty-state mx-auto">
            <img src={props.icon} alt="empty" />
        </button>
    )
}

export default ButtonEmpty;