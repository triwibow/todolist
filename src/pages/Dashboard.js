import ButtonAdd from "../components/button/ButtonAdd";
import CardList from "../components/card/CardList";

const Dashboard = () => {
   return(
    <div className="container py-4">
        <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-between mb-5">
                <h3 className="fw-bold">Activity</h3>
                <ButtonAdd/>
            </div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <CardList/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Dashboard;