import './feed.css';
import img from "../../img/filhote-gato.jpg";


function Feed() {
  return (
    <div className="Feed">
      <div className='PerfilEsquerda'>
        <div className='FotoPerfil'>
          <img src={img} width="100px" height="100px" className='img'/>
        </div>
      </div>
    </div>
  );
}

export default Feed;