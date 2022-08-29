import { useNavigate } from 'react-router-dom';
import ModalDeleteActivity from '../modal/ModalDeleteActivity';
import Moment from 'react-moment';
import 'moment/locale/id';
import { API } from '../../config/api';

const CardList = (props) => {
    const navigate = useNavigate();
    const getDetail = async () => {
        try {
            const response = await API.get(`/activity-groups/${props.data.id}`);
            if(response.status === 200){
                navigate(`/detail/${props.data.id}`);
            }
            
        } catch(e)
        {
            console.log(e);
        }
    }

    return (
        <div className={props.column} data-cy="activity-item">
            <div className="card-list">
                <div className="card-list-body" onClick={getDetail}>
                    <h5 className="text-title" data-cy="activity-item-title">{props.data.title}</h5>
                </div>
                <div className="card-list-footer">
                    <span className="text-date" data-cy="activity-item-date">
                        <Moment format="DD MMMM YYYY" locale="id">
                            {props.data.created_at}
                        </Moment>
                    </span>
                    <ModalDeleteActivity 
                        id={props.data.id}
                        title={props.data.title}
                        delete={props.delete} 
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default CardList;