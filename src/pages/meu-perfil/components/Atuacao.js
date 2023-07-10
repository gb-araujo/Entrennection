import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example" placeholder='Área de atuação'>
      <option>Área de atuação</option>
      <option value="1">Microempreendedor</option>
      <option value="2">Acionista</option>
      <option value="3">Mentor</option>
    </Form.Select>
  );
}

export default SelectBasicExample;