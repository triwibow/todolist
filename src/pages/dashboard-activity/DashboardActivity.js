import { useState, useEffect } from "react";
import {API} from "../../config/api";
import { emailConfig } from "../../config/email";

import ButtonAdd from "../../components/button/ButtonAdd";
import CardList from "../../components/card/CardList";
import PageLoader from "../../components/loader/PageLoader";
import ButtonEmpty from "../../components/button/ButtonEmpty";
import AlertActivity from "../../components/alert/AlertActivity";
import emptyState from "../../assets/icon/activity-empty-state.png";

const DashboardActivity = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        status: false,
        loading: false,
        message: "Sedang mengolah data"
    });
    const email = emailConfig();

    const loadData = async () => {
        try {
            setLoading(true);
            const response = await API.get("/activity-groups", {
                params:{
                    email: email
                }
            });

            if(response.status !== 200){
                setError(true);
                setLoading(false);
                return;
            }   

            if(response.data.data.length < 1){
                setError(true);
                setLoading(false);
                return;
            }
           
            setData(response.data.data);
            setLoading(false);
            setError(false);
        } catch(e)
        {
            setError(true);
        }
    }

    const addData = async (status) => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });

            const params = {
                title: "New Activity",
                email: email
            }

            const response = await API.post('/activity-groups', params);

            if(response.status !== 201){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }

            setStatus({
                status: true,
                loading:false,
                message: "Berhasil menambahkan activity"
            });

            loadData();

        } catch(e)
        {
            console.log(e);
            setStatus({
                status: true,
                loading:false,
                message: "Terjadi Kesalahan"
            });
        }
    }


    const deleteData = async (id) => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });

            const response = await API.delete(`/activity-groups/${id}`);
            
            if(response.status !== 200){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }

            
            setData((arr) => {
                return arr.filter(item => {
                    return item.id !== id
                })
            });
            setStatus({
                status: true,
                loading:false,
                message: "Berhasil menghapus activity"
            });

            loadData();

        } catch(e)
        {
            setStatus({
                status: true,
                loading:false,
                message: "Terjadi kesalahan"
            });
        }
    }

    useEffect(() => {
        loadData();
    }, []);

   return(
    <div className="container py-4">
        <AlertActivity status={status} setStatus={setStatus}/>
        <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-between mb-5">
                <h3 data-cy="activity-title" className="fw-bold">Activity</h3>
                <ButtonAdd click={() =>addData()}/>
            </div>

            <div className="col-md-12">
                { error ? (
                    <div className="text-center">
                        <ButtonEmpty icon={emptyState} />
                    </div>
                ): loading ? (
                    <PageLoader />
                ): (
                    <div className="row">
                        {data.map(item => {
                            return <CardList 
                                        key={item.id}
                                        data={item}
                                        column="col-md-3 mb-4"
                                        to={`/detail/${item.id}`}
                                        delete={(id) => deleteData(id)}
                                    />
                        })}
                    </div>
                )}
                
            </div>
        </div>
    </div>
   )
}

export default DashboardActivity;