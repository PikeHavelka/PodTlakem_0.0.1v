import { Form, Formik, Field, ErrorMessage } from "formik"
import "./ContactForm.scss"
import * as Yup from "yup"

function FooterForm() {

  return <Formik
    initialValues={{
      name: "",
      mobileNumber: "",
      email: ""
    }}

    onSubmit={ (values, {resetForm}) => {
      console.log(values)
      resetForm()
    }}

    validationSchema={
      Yup.object({
        name: Yup.string().required("nejde to"),
        mobileNumber: Yup.string().required(),
        email: Yup.string().required()
      })
    }
    >

    <Form action="">
      <h1>Zadejte Vaší poptávku zde</h1>

      <div className="text-inputs">
        <Field
          type="text"
          placeholder="Jméno"
          name="name"
          required
        />
        <ErrorMessage name="name" component="div" className="red"/>

        <Field
          type="text"
          placeholder="Telefonní číslo"
          name="mobileNumber"
          required
        />
        <ErrorMessage name="mobileNumber" />

        <Field
          type="email"
          placeholder="E-mail"
          name="email"
          required
        />
        <ErrorMessage name="email" />
      </div>

      <textarea
        placeholder="Vaše zpráva"
      />

      <Field type="submit" value="Odeslat"/>
    </Form>
  </Formik>
}

export default FooterForm