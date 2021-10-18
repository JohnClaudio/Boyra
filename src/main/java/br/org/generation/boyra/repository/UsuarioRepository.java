package br.org.generation.boyra.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.boyra.model.Usuario;

public interface UsuarioRepository extends JpaRepository <Usuario, Long> {
	
	public Optional <Usuario> findByUsuario (String usuario);
	
	public List<Usuario> findAllByNomeContainingIgnoreCase(String nome);
	
	public Usuario findByNome(String nome);

}
