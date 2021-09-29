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
	
	@NotNull(message =" obrigatorio")
	@Size(min=5, max =255)
	private String descricao;
	
	@NotNull(message =" obrigatorio")
	@Size(min=5, max =50)
	private String nome;

	@NotNull(message =" obrigatorio")
	@Size(min=5, max =80)
	private double palavraChave;
	

	
}
