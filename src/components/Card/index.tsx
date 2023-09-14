import { Card as BaseCard } from 'antd';
import { ReactNode } from 'react';

interface Props {
    title?: string;
    children: ReactNode;
}

const Card  = ({ title, children} : Props) => {

    return (
        <BaseCard title={title}>
            {children}
        </BaseCard>
    )
}

export default Card