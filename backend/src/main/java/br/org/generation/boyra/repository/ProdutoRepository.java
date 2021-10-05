package br.org.generation.boyra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.boyra.model.Produto;

public interface ProdutoRepository extends JpaRepository <Produto, Long>{
	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
	
}
