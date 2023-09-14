import { ReactNode } from "react";

interface Props {
    headers: string[];
    children: ReactNode;
}

const Table = ({ headers, children } : Props) => {

    return (
        <table border={1}>
            <thead>
                <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table