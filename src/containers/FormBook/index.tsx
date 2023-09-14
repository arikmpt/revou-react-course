import { Card, Text } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface Book {
    name: string;
    price: string;
    description?: string;
}

const initialValues = {
    name: '',
    price: '',
    description: ''
}

const validationSchema = yup.object({
    name: yup.string().required('ini wajib lo geis'),
    price: yup.string().required('ini wajib juga geis'),
    description: yup.string()
})

const FormBook = () => {

    const handleSubmit = (values: Book) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
        <Card title={'Form Buku'}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Text>Nama Buku: </Text>
                    <Input name={'name'}
                        value={formMik.values.name} 
                        onChange={formMik.handleChange('name')}
                        status={formMik.errors.name && 'error'}
                    />
                    {formMik.errors.name && (
                        <Text>{formMik.errors.name}</Text>
                    )}
                </div>
                <div>
                    <Text>Harga Buku: </Text>
                    <Input name={'price'} 
                        value={formMik.values.price}
                        onChange={formMik.handleChange('price')}
                        status={formMik.errors.price && 'error'}
                        />
                    {formMik.errors.price && (
                        <Text>{formMik.errors.price}</Text>
                    )}
                </div>
                <div>
                    <Text>Deskripsi Buku: </Text>
                    <Input.TextArea rows={5} name={'description'} 
                        value={formMik.values.description}
                        onChange={formMik.handleChange('description')}
                        status={formMik.errors.description && 'error'}
                    />
                    {formMik.errors.description && (
                        <Text>{formMik.errors.price}</Text>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
        </Card>
    )
}

export default FormBook