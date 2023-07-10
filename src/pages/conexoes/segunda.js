import Cardconexao from '../../components/cardconexao/cardconexao';
import './segunda.css';


function SegundaConexao() {
  return (
    
    <div className="SegundaConexao  m-0 p-0">
      <h1 className='tituloempresa py-4'>Conexões</h1>
      <div className='container w-75'>
        <Cardconexao/>
        <Cardconexao/>
        <Cardconexao/>
        <Cardconexao/>
        <Cardconexao/>
        <Cardconexao/>
        <Cardconexao/>
      </div>
    </div>
  );
}

export default SegundaConexao;