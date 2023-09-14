import { ChangeEvent, Dispatch, SetStateAction } from "react";


interface DataUser {
    name?: string;
    email?: string;
}

interface Props {
    form?: DataUser;
    setForm: Dispatch<SetStateAction<DataUser | undefined>>;
}

const RegisterForm = ({form, setForm} : Props) => {

    //Best Practice
    const handleForm = (type: 'name' | 'email') => (event: ChangeEvent<HTMLInputElement>) => {
        const tempForm: DataUser = {
            ...form,
            [type] : event.target.value
        }
        setForm(tempForm)
    }

    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" value={form?.name} name="name" onBlur={handleForm('name')}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={form?.email} name="email" onBlur={handleForm('email')}/>
            </div>
            <button type="submit">Submit Form</button>
        </form>
    )  
}

export default RegisterForm