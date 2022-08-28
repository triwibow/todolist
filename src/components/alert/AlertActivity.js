import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const AlertActivity = (props) => {
    const [mode, setMode] = useState("");
    const {setStatus} = props;

    useEffect(() => {
        setMode(props.status.status?"show":"");
        console.log(mode);
        setTimeout(() => {
            console.log(mode);
            if(props.status.status === true && mode === ""){
                setStatus({
                    status: false,
                    loading:false,
                    message: props.status.message
                })
            }
        }, 2000);
        
    },[props.status.status])

    return (
        <div className={'alert-activity '+mode}>
            <Icon icon="akar-icons:circle-alert" color="#00a790" width="30" height="30" />
            <span className="ms-3">{props.status.message}</span>
        </div>
    )
}

export default AlertActivity;