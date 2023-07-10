package br.com.api.produtos.repositorio;

import br.com.api.produtos.modelo.UsuarioModelo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends CrudRepository<UsuarioModelo, Long> {

}