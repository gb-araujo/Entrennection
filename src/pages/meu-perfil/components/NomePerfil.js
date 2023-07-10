import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor="inputProfileName">Nome do Perfil</Form.Label>
      <Form.Control
        placeholder='ex: GModas'
        type="name"
        id="inputProfileName"
        aria-describedby="NameHelpBlock"
      />
      <Form.Text id="NameHelpBlock" muted>
        Seu nome não pode conter; Caracteres especiais, emojis e números.
      </Form.Text>
    </>
  );
}

export default FormTextExample;