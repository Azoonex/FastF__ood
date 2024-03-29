import { Formik } from "formik"

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
                {({ values, handleChange,handleSubmit }) => (
                    <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column w-50 h-50
                            py-5 rounded shadow 
                            bg-info align-items-center align-content-center gap-3">
                        <h3 className="text-white ">وارد شوید</h3>
                        <input
                        name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="name..."
                            required type="text" className="w-50 form-control" />
                        <input
                        name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="email..."
                            required type="email" className="w-50 form-control" />
                        <button
                            className="btn btn-danger ">تایید کنید</button>
                    </form>
                )}

            </Formik>
        </div>
    )
}

export default LoginMain
