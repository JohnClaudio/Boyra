package br.org.generation.boyra.model;

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Table;
	import javax.validation.constraints.NotNull;
	import javax.validation.constraints.Size;

	@Entity
	@Table (name = "tb_usuario")
	public class Usuario {

		
		@NotNull
		@GeneratedValue( strategy = GenerationType.IDENTITY)
		private long id;
		
		@NotNull
		@Size (min = 5, max = 100 , message = "O campo de usuário é obrigatorio")
		private String usuario;
		
		@NotNull
		@Size (min = 5, max = 200 , message = "O campo de email é obrigatorio")
		private String email;
		
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

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}
		
		
	}

