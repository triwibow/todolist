import emptyPng from "../../assets/icon/todo-empty-state.png";
import ButtonAdd from "../../components/button/ButtonAdd";
import CardList from "../../components/card/CardList";
import BackNavigation from "../../components/navigation/BackNavigation";
import ButtonEmpty from "../../components/button/ButtonEmpty";
import ListItem from "../../components/list/ListItem";
import Dropdown from "../../components/dropdown/Dropdown";
import Form from "./Form";

const NewActivity = () => {
   return(
    <div className="container py-4">
        <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex align-items-center">
                    <BackNavigation />
                    <h3 className="fw-bold mb-0">Activity</h3>
                </div>
                <div className="d-flex align-items-center">
                    <Dropdown
                        mr="15px"
                    />
                    <Form />
                </div>
                
            </div>

            <div className="col-md-12">
                {/* <div className="row">
                    <div className="col-md-12 text-center">
                        <ButtonEmpty
                            icon={emptyPng}
                        />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                        <ListItem />
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default NewActivity;