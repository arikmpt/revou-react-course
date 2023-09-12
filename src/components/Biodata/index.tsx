import { ReactNode } from "react";

interface Props {
    name: string;
    age: number;
    status: string;
    child: ReactNode;
}

const Biodata = ({name, age, status, child} : Props) => {

    return (
        <>
            <h3>Biodata Pengguna</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {status}</p>
            {/* Render Html */}
            {child}
        </>
    )
}

export default Biodata