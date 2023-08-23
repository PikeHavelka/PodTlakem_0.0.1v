import { Form, Formik, Field, ErrorMessage } from "formik"
import "./ContactForm.scss"
import * as Yup from "yup"

function FooterForm() {

  return <Formik
    initialValues={{
      name: "",
      mobileNumber: "",
      email: "",
      message: ""
    }}

    onSubmit={(values, { resetForm }) => {
      console.log(values)
      resetForm()
      alert("Vaše zpráva byla úspěšně odeslána.")
    }}

    validationSchema={
      Yup.object({
        name: Yup.string().min(2, "min. délka 2 písmena").max(20, "max. délka 20 písmen"),
        mobileNumber: Yup.string().min(9, "min. délka 9 číslic"),
        email: Yup.string(),
        message: Yup.string().min(20, "Minimální délka 20 znaků.")
      })
    }
  >

    <Form action="">
      <h1>Zadejte Vaší poptávku zde</h1>

      <div className="text-inputs">
        <div className="name-field">
          <Field
            type="text"
            id="name"
            placeholder="Jméno"
            name="name"
            required
          />
          <ErrorMessage name="name" component="div" className="red name" />
        </div>

        <div className="mobileNum-field">
          <Field
            type="text"
            placeholder="Telefonní číslo"
            name="mobileNumber"
            required
          />
          <ErrorMessage name="mobileNumber" component="div" className="red mobileNumber" />
        </div>

        <div className="email-field">
          <Field
            type="email"
            placeholder="E-mail"
            name="email"
            required
          />
          <ErrorMessage name="email" component="div" className="red email" />
        </div>
      </div>

      <div className="textarea-field">
        <Field
          as="textarea"
          placeholder="Vaše zpráva"
          name="message"
          required
        />
        <ErrorMessage name="message" component="div" className="red" />
      </div>

      <Field type="submit" name="submit" value="Odeslat" />
    </Form>
  </Formik>
}

export default FooterForm