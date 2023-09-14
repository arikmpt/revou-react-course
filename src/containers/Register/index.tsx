import { ChangeEvent, FormEvent, useState } from 'react';
import { Table, RegisterForm } from '../../components';

interface DataUser {
    name?: string;
    email?: string;
}

const Register = () => {

    const [form, setForm] = useState<DataUser>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [users, setUsers] = useState<DataUser[]>([]);
    const [userBests, setUserBests] = useState<DataUser[]>([]);

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setUsers((prevState) => [...prevState, {
            name,
            email
        }])

        setUserBests((prevState) => [...prevState, {
            name: form?.name,
            email: form?.email
        }])
    }


    const renderTableBody = () => {
        return (
            <>
                {users.map((v, index) => (
                    <tr key={index}>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                    </tr>
                ))}
            </>
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} name="name" onBlur={handleChangeName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} name="email" onBlur={handleChangeEmail}/>
                </div>
                <button type="submit">Submit Form</button>
            </form>
            <Table headers={['Nama','Email']} children={renderTableBody()} />
            <hr />
            <h4>Best Practice</h4>

        </>
    )

}

export default Register