import ButtonDelete from "../button/ButtonDelete";

const CardList = () => {
    return (
        <div className="card-list">
            <div className="card-list-body">
                <h5 className="fw-bold">Daftar Belanja Bulanan</h5>
            </div>
            <div className="card-list-footer">
                <span className="text-date">5 Oktober 2021</span>
                <ButtonDelete/>
            </div>
        </div>
    )
}

export default CardList;