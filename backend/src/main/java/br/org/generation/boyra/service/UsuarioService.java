package br.org.generation.boyra.service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.org.generation.boyra.model.Usuario;
import br.org.generation.boyra.model.UsuarioLogin;
import br.org.generation.boyra.repository.UsuarioRepository;

@Service
public class UsuarioService {


	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public List<Usuario> listarUsuarios(){

		return usuarioRepository.findAll();

	}
	
	public Optional<Usuario> cadastrarUsuario(Usuario usuario) {

		if (usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			return Optional.empty();

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		String senhaEncoder = encoder.encode(usuario.getSenha());
		
		usuario.setSenha(senhaEncoder);

		return Optional.of(usuarioRepository.save(usuario));

	}

	public Optional<UsuarioLogin> autenticarUsuario(Optional<UsuarioLogin> usuarioLogin) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		Optional<Usuario> usuario = usuarioRepository.findByUsuario(usuarioLogin.get().getUsuario());

		if (usuario.isPresent()) {
			if (encoder.matches(usuarioLogin.get().getSenha(), usuario.get().getSenha())) {

				String auth = usuarioLogin.get().getUsuario() + ":" + usuarioLogin.get().getSenha();
				
				
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				
				
				String authHeader = "Basic " + new String(encodedAuth);

				
				usuarioLogin.get().setId(usuario.get().getId());
				usuarioLogin.get().setNome(usuario.get().getNome());
				usuarioLogin.get().setSenha(usuario.get().getSenha());
				usuarioLogin.get().setToken(authHeader);

				return usuarioLogin;

			}
		}
		return Optional.empty();
	}

}