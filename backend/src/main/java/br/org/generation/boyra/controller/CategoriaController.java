package br.org.generation.boyra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.org.generation.boyra.model.Categoria;
import br.org.generation.boyra.repository.CategoriaRepository;

@RestController
@RequestMapping("/categoria") 
@CrossOrigin(origins = "*", allowedHeaders = "*") 
public class CategoriaController {

	@Autowired
	private CategoriaRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Categoria>> getAll (){
		return ResponseEntity.ok(repository.findAll());
	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Categoria> getById(@PathVariable long id) {
		return repository.findById(id)
			.map(resp -> ResponseEntity.ok(resp))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Categoria> postCategoria (@RequestBody Categoria categoria){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categoria));
	}
	
	
	@PutMapping
	public ResponseEntity<Categoria> put(@RequestBody Categoria categoria)
	{
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(repository.save(categoria));
	}

	@GetMapping("/{nome}")
	public ResponseEntity<List<Categoria>> getByName(@PathVariable String nome)
	{
		return ResponseEntity.ok().body(repository.findAllByNomeContainingIgnoreCase(nome));
	}

	@DeleteMapping
	public void deletebyId(Long id)
	{
		repository.deleteById(id);
	}
	
}
