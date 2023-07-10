package br.com.api.produtos.controle;

import br.com.api.produtos.modelo.UsuarioModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.servico.UsuarioServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class UsuarioControle {

    @Autowired
   private UsuarioServico us;

    @CrossOrigin
    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo){
        return us.remover(codigo);
    }

    @CrossOrigin
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody UsuarioModelo pm){
        return us.cadastrarAlterar(pm, "Alterar");
    }

    @CrossOrigin
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody UsuarioModelo um){
        return us.cadastrarAlterar(um, "cadastrar");
    }

    @CrossOrigin
    @GetMapping("/listar")
    public Iterable<UsuarioModelo> listar(){
        return us.listar();
    }
    //Método para listar todos os produtos

    @CrossOrigin
    @GetMapping("/")
    public String rota (){
        return "Unindo Talentos & Transformando Negócios";
    }

}
