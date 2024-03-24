import { Formik,Field } from "formik"


function Login() {

  return (
    <div className="login_container">
      <div className="login_container">
        <h3 className="text-withe">وارد شوید</h3>
        <Formik
          initialValues={{name: "",email: ""}}
          onSubmit={(values)=>{
            console.log("Form inputs data => ", values);
          }}
        >
          <Field type="text" name="name" placeholder="name"  />
          <Field type="email" name="email" placeholder="email" />

        </Formik>
      </div>
    </div>
  )
}

export default Login
