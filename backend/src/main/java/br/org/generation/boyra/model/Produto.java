package br.org.generation.boyra.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_produto")
public class Produto {

	// Atributos
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message ="O atributo nome é obrigatório!")
	@Size(min=5, max =255, message = "O atributo nome deve ter no minimo 5 e no max 255 caracteres!")
	private String nome;
	
	
	private String imagemUrl;
	
	@NotNull(message ="O atributo preco é obrigatório!")
	private BigDecimal preco;
	
	@NotNull(message ="O atributo descrição é obrigatório!")
	@Size(min=5, max =255, message = "O atributo descricao deve ter no minimo 5 e no max 255 caracteres!")
	private String descricao;
	
	@ManyToOne
	@JsonIgnoreProperties("produtos")
	private Categoria categoria;

	
	//Métodos
	
	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getNome() 
	{
		return nome;
	}

	public void setNome(String nome)
	{
		this.nome = nome;
	}

	public String getImagemUrl()
	{
		return imagemUrl;
	}

	public void setImagemUrl(String imagemUrl) 
	{
		this.imagemUrl = imagemUrl;
	}

	public BigDecimal getPreco()
	{
		return preco;
	}

	public void setPreco(BigDecimal preco)
	{
		this.preco = preco;
	}

	public String getDescricao() 
	{
		return descricao;
	}

	public void setDescricao(String descricao)
	{
		this.descricao = descricao;
	}
	
	public Categoria getCategoria() 
	{
		return categoria;
	}

	public void setCategoria(Categoria categoria)
	{
		this.categoria = categoria;
	}
	
}	