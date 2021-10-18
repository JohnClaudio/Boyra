package br.org.generation.boyra.model;

	import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import io.swagger.annotations.ApiModelProperty;

	@Entity
	@Table (name = "tb_usuario")
	public class Usuario {

		@Id
		@NotNull
		@GeneratedValue( strategy = GenerationType.IDENTITY)
		private long id;
		
		@ApiModelProperty(example = "email@email.com.br")
		@NotNull(message = "O atributo Usuário é Obrigatório!")
		@Email(message = "O atributo Usuário deve ser um email válido!")
		private String usuario;

	
		
		@NotNull
		@Size (min = 5, max = 200 , message = "O campo de nome é obrigatorio")
		private String nome;
		
		@NotNull
		@Size (min = 5, max = 100 , message = "O campo de senha é obrigatorio")
		private String senha;

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getUsuario() {
			return usuario;
		}

		public void setUsuario(String usuario) {
			this.usuario = usuario;
		}

		public String getNome() {
			return nome;
		}

		public void setEmail(String nome) {
			this.nome = nome;
		}

		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}
		
		
	}

