import { Icon } from "@iconify/react";

const AlertActivity = () => {
    return (
        <div className="alert-activity">
            <Icon icon="akar-icons:circle-alert" color="#00a790" width="30" height="30" />
            <span className="ms-3">Activity berhasil dihapus</span>
        </div>
    )
}

export default AlertActivity;