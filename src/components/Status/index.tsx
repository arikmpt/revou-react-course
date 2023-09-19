import { useMemo } from "react";

interface Props {
    status: number;
}

const Status = ({ status }: Props) => {

    // const activeStatus = () => {
    //     if(status === 1) {
    //         return 'Active'
    //     }

    //     return 'Deactive'
    // }

    const activeStatus = useMemo(() => {
        if(status === 1) {
            return 'Active'
        }

        return 'Deactive'
    }, [status]);

    return (
        <>
            <p className="contoh">{activeStatus}</p>
            <p>{status}</p>
            {/* <p className="contoh">{activeStatus()}, {status}</p> */}
        </>
    )
}

export default Status
