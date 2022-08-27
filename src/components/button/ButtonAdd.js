import addIcon from "../../assets/icon/add-icon.svg";

const ButtonAdd = () => {
    return (
        <button className="btn btn-add fw-bold d-flex align-items-center">
            <img src={addIcon} alt="add" className="me-2" />
            <span>Tambah</span>
        </button>
    )
}

export default ButtonAdd;