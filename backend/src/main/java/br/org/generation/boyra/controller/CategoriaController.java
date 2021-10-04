package br.org.generation.boyra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.boyra.model.Categoria;
import br.org.generation.boyra.repository.CategoriaRepository;

@RestController
@RequestMapping("/categoria") 
@CrossOrigin(origins = "*", allowedHeaders = "*") 
public class CategoriaController {

	@Autowired
	private CategoriaRepository Repository;
	
	@GetMapping
	public ResponseEntity<List<Categoria>> getAll (){
		return ResponseEntity.ok(Repository.findAll());
	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Categoria> getById(@PathVariable long id) {
		return Repository.findById(id)
			.map(resp -> ResponseEntity.ok(resp))
			.orElse(ResponseEntity.notFound().build());
	}
}
