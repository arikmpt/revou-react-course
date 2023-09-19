// import { useMemo } from "react";
import { useStatus, getStatus } from '../../hooks'

interface Props {
    status: number;
}

const Status = ({ status }: Props) => {

    const formattedStatus = useStatus({ status })

    const activeStatus = getStatus({ status })

    // const activeStatus = useMemo(() => {
    //     if(status === 1) {
    //         return 'Active'
    //     }

    //     return 'Deactive'
    // }, [status]);

    return (
        <>
            <p className="contoh">{formattedStatus}</p>
            <p className="contoh">{activeStatus}</p>
            <p>{status}</p>
            {/* <p className="contoh">{activeStatus()}, {status}</p> */}
        </>
    )
}

export default Status
