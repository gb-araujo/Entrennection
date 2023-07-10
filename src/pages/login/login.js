import { Col, Row } from 'react-bootstrap';
import './login.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/login.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import img from "../../img/site-logo.jpg";
import Footer from '../../components/footer/footer';

function Login() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [gmail, setGmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleNomeCompletoChange = (e) => {
    setNomeCompleto(e.target.value);
  }

  const handleGmailChange = (e) => {
    setGmail(e.target.value);
  }

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  }

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  }

  const handleDataNascimentoChange = (e) => {
    setDataNascimento(e.target.value);
  }

  const handleTelefoneChange = (e) => {
    setTelefone(e.target.value);
  }

  const handleCnpjChange = (e) => {
    setCnpj(e.target.value);
  }

  const handleNomeEmpresaChange = (e) => {
    setNomeEmpresa(e.target.value);
  }

  const handleLogin = () => {
    if (email === "entrennection@gmail.com" && password === "1234" || email === "admin@admin" && password === "admin") {
      Navigate("/home");
    } else {
      alert("Senha ou Email incorretos, tente novamente");
    }
  }

  const handleSignup = () => {
    abrirModal();
  }

  const handleLanding = () => {
    Navigate("/");
  }

  const fecharModal = () => {
    setShowModal(false);
  }

  const abrirModal = () => {
    setShowModal(true);
  }

  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica para processar os dados de cadastro
    // Por enquanto, apenas exibirei os dados no console para demonstração
    console.log("Nome Completo:", nomeCompleto);
    console.log("Gmail:", gmail);
    console.log("Senha:", senha);
    console.log("CPF:", cpf); 
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Telefone:", telefone);
    console.log("CNPJ:", cnpj);
    console.log("Nome da Empresa:", nomeEmpresa);
  }

  return (
    <div className='p-0'>
      <div className='px-3 py-2' style={{ backgroundColor: "#023859" }}>
        <img src={img} className='imgsite-logo' onClick={handleLanding}></img>
      </div>
      <Row className='p-0 m-0'>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} className='p-0 m-0 d-none d-md-block vh-100'>
          <img src={imagem} className='img-login'></img>
        </Col>

        <Col xs={12} sm={12} md={7} lg={7} xl={7} className='p-0 m-0 d-flex justify-content-center align-items-center vh-100'>
          <div className='d-flex justify-content-center card-container'>
            <div className="card card-login p-3">
              <div className="card-body">
                <Form>
                  <h2 className='text-center'>Faça Login ou Cadastre-se</h2>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="****" value={password} onChange={handlePasswordChange} />
                  </Form.Group>

                  <div className="d-grid gap-2 col-12">
                    <Button variant="dark" className='botao-login-1' onClick={handleLogin}>Entrar</Button>
                    <Button variant="dark" onClick={handleSignup}>Cadastre-se</Button>
                  </div>

                </Form>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='p-0 m-0'>
          <Footer></Footer>
        </Col>
      </Row>

      <Modal show={showModal} onHide={fecharModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeCompleto">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome completo" value={nomeCompleto} onChange={handleNomeCompletoChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGmail">
              <Form.Label>Gmail</Form.Label>
              <Form.Control type="email" placeholder="name@gmail.com" value={gmail} onChange={handleGmailChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" value={senha} onChange={handleSenhaChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite seu CPF" value={cpf} onChange={handleCpfChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDataNascimento">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" value={dataNascimento} onChange={handleDataNascimentoChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Digite seu telefone" value={telefone} onChange={handleTelefoneChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control type="text" placeholder="Digite o CNPJ da empresa" value={cnpj} onChange={handleCnpjChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNomeEmpresa">
              <Form.Label>Nome da Empresa</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome da empresa" value={nomeEmpresa} onChange={handleNomeEmpresaChange} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="dark" className='botao-login-1' onClick={handleCadastro} size="lg">Cadastrar</Button>
          <Button variant="dark" onClick={fecharModal} size="lg">Cancelar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;