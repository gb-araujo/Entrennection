package br.com.api.produtos.servico;

import br.com.api.produtos.modelo.UsuarioModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.api.produtos.repositorio.UsuarioRepositorio;

@Service
public class UsuarioServico {

    @Autowired
    private UsuarioRepositorio ur;

    @Autowired
    private RespostaModelo rm;

    //Método para listar todos os produtos
    public Iterable<UsuarioModelo> listar(){

        return ur.findAll();
    }

    //Método para cadastrar ou alterar produtos
    public ResponseEntity<?> cadastrarAlterar(UsuarioModelo um, String acao){

        if(um.getNomeCompletoUsuario().equals("")) {
            rm.setMensagem("O nome completo é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if (um.getDataNascimentoUsuario().equals("")){
            rm.setMensagem("A data de nascimento é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if (um.getSenha().equals("")){
            rm.setMensagem("A senha é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if (um.getCpfUsuario().equals("")){
            rm.setMensagem("O CPF é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if (um.getEmail().equals("")){
            rm.setMensagem("O Email é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if (um.getTelefoneUsuario().equals("")){
            rm.setMensagem("O telefone é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<UsuarioModelo>(ur.save(um), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<UsuarioModelo>(ur.save(um), HttpStatus.OK);
            }
        }

    }

    //Método para remover produtos
    public ResponseEntity<RespostaModelo> remover(long codigo){

        ur.deleteById(codigo);

        rm.setMensagem("O produto foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);

    }
}
