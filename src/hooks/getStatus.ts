interface Props {
    status: number;
}

const getStatus = ({ status }: Props) => {
    if(status === 1) {
        return 'Active'
    }

    return 'Deactive'
}

export default getStatus