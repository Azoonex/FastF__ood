import { Formik, Field, Form } from "formik"

function Register() {
    let valuesRe = {
        name: "",
        eamil: "",
        phone: "",
        password: ""
    }
    const formHnadlerSubmit = (values) => {
        console.log(values.name)
        
    }
    return (
        <div className="main_register">
            <Formik initialValues={valuesRe} onSubmit={formHnadlerSubmit}>
                <Form className="d-flex flex-column gap-2 bg-danger w-25 h-50 p-5 rounded">
                    <Field type="text" name="name" placeholder="name..." />
                    <Field type="email" name="eamil" placeholder="eamil..." />
                    <Field type="number" name="phone" placeholder="phone..." />
                    <Field type="password" name="password" placeholder="password..." />
                    <button type="submit" className="btn btn-primary">وارد شوید</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Register
