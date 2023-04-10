import React, { useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Container, Row, Col } from "react-bootstrap";
import detectCelebrity from "../utils/detectCelebrity";
import generatePDF from "../utils/generatePDF";

const InscriptionSchema = Yup.object().shape({
  fullName: Yup.string().required("El nombre completo es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  photo: Yup.mixed().required("La foto es obligatoria"),
});

const InscriptionForm = () => {
  const [celebrityDiscount, setCelebrityDiscount] = useState(false);
  const receiptRef = useRef();

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("photo", file);
    }
  };

  const handleSubmit = async (values) => {
      const receiptElement = receiptRef.current;
    generatePDF(receiptElement, "comprobante_inscripcion.pdf");
    const isCelebrity = await detectCelebrity(values.photo);
    setCelebrityDiscount(isCelebrity);
    // Continuar con la inscripción y generar comprobante en PDF
  };

  const generateReceipt = (fullName, email) => {
    return (
      <div
        ref={receiptRef}
        style={{ width: "210mm", minHeight: "297mm", background: "white" }}
      >
        <h1>Comprobante de inscripción</h1>
        <p>Nombre completo: {fullName}</p>
        <p>Correo electrónico: {email}</p>
        {celebrityDiscount && <p>Descuento del 10% por ser una celebridad</p>}
      </div>
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Inscripción INTEC</h1>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              photo: null,
            }}
            validationSchema={InscriptionSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <>
                <Form>
                  <label htmlFor="fullName">Nombre completo:</label>
                  <Field name="fullName" />
                  {errors.fullName && touched.fullName ? (
                    <div>{errors.fullName}</div>
                  ) : null}

                  <label htmlFor="email">Correo electrónico:</label>
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <label htmlFor="photo">Foto:</label>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    onChange={(event) => handleFileChange(event, setFieldValue)}
                  />
                  {errors.photo && touched.photo ? (
                    <div>{errors.photo}</div>
                  ) : null}

                  {celebrityDiscount && (
                    <div>
                      <strong>Descuento del 10% por ser una celebridad</strong>
                    </div>
                  )}

                  <Button type="submit">Inscribirse</Button>
                </Form>
                {generateReceipt(values.fullName, values.email)}
              </>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default InscriptionForm;
