import { useMemo } from 'react';

interface Props {
    status: number;
}

const useStatus = ({ status }: Props) => {

    const formattedStatus = useMemo(
        () => {
            if(status === 1) {
                return 'Active'
            }

            return 'Deactive'
        },
        [status]
    )

    return formattedStatus
}

export default useStatus