import './empresas.css';
import Cardconexao from '../../components/cardconexao/cardconexao';



function Empresas() {
  return (
    
    <div className="Empresas m-0 p-0">
      <h1 className='tituloempresa py-4'>Empresas</h1>
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

export default Empresas;