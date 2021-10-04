package br.org.generation.boyra.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_categoria")
public class Categoria {


	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message ="O atributo descricao é obrigatório!")
	@Size(min=5, max =255, message = "O atributo título deve ter no minimo 5 e no max 255 caracteres!")
	private String descricao;
	
	@NotNull(message ="O atributo nome é obrigatório!")
	@Size(min=5, max =50, message = "O atributo título deve ter no minimo 5 e no max 50 caracteres!")
	private String nome;

	private String palavraChave;


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPalavraChave() {
		return palavraChave;
	}

	public void setPalavraChave(String palavraChave) {
		this.palavraChave = palavraChave;
	}
}
