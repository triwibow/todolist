import deleteIcon from '../../assets/icon/delete-icon.svg';

const ButtonDelete = () => {
    return (
        <button className="btn-delete">
            <img src={deleteIcon} alt="delete"/>
        </button>
    )
}

export default ButtonDelete;