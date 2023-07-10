package br.com.api.produtos.modelo;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.Data;


@Entity
@Table(name = "usuario")
@Data
public class UsuarioModelo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 100)
    private String nomeCompletoUsuario;
    @Email
    @Column(nullable = false, length = 100)
    private String email;
    @Column(nullable = false, length = 100)
    private String senha;
    @Column(nullable = false, length = 100)
    private String dataNascimentoUsuario;
    @Column(nullable = false, length = 100)
    private String telefoneUsuario;
    @Column(nullable = false, length = 100)
    private String cpfUsuario;
}
