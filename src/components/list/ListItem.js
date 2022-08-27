import ButtonEdit from "../button/ButtonEdit";
import ButtonDelete from "../button/ButtonDelete";

const ListItem = () => {
    return (
        <div className="list-item mb-3">
            <div className="d-flex align-items-center">
                <input className="me-3 form-check-input" type="checkbox" />
                <span className="dot me-3"></span>
                <h5 className="list-item-title mb-0 me-4">Telur 2kg</h5>
                <ButtonEdit/>
            </div>
            <ButtonDelete />
        </div>
    )
}

export default ListItem;