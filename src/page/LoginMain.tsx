import { Formik, Form, Field } from "formik"

const mainCotainer = {
    width: "100%",
    height: '100vh'
}

function LoginMain() {
    return (
        <div style={mainCotainer} className="d-flex justify-content-center align-items-center  ">
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={(values) => {
                    console.log("form inputs Data =>", values);
                }}
            >
                {({ values, handleChange }) => (
                    <Form
                        className="d-flex flex-column w-50 h-50
                                    py-5 rounded shadow 
                                    bg-info align-items-center align-content-center gap-3">
                        <h3 className="text-white ">وارد شوید</h3>
                        <Field type="text" name="name" placeholder="Name..." />
                        <Field type="email" placeholder="Email..." name="email..." />
                        <button
                            type="submit"
                            className="btn btn-danger ">تایید کنید</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default LoginMain
