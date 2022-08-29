const ButtonEmpty = (props) => {
    return (
        <button data-cy="todo-empty-state" className="btn-empty-state mx-auto">
            <img src={props.icon} alt="empty" />
        </button>
    )
}

export default ButtonEmpty;