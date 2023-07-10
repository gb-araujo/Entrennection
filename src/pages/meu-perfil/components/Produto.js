import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor="inputProfileName">Produto</Form.Label>
      <Form.Control
        placeholder='ex: Roupas premium'
        type="text"
        id="inputProfileName"
        aria-describedby="TextHelpBlock"
      />
      <Form.Text id="TextHelpBlock" muted>
        Escreva o produto vendido por você.
      </Form.Text>
    </>
  );
}

export default FormTextExample;