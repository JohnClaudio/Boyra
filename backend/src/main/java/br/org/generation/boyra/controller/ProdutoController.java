package br.org.generation.boyra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.boyra.model.Produto;
import br.org.generation.boyra.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
	@Autowired
	private ProdutoRepository repository;
	
	public ResponseEntity<List<Produto>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
    @GetMapping("/nome/{nome}")
        public ResponseEntity<List<Produto>> getByName(@PathVariable String nome) {
        return ResponseEntity.ok().body(repository.findAllByNomeContainingIgnoreCase(nome));
    }
	
	@GetMapping("/{id}")
	public ResponseEntity <Produto> getById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Produto>> getByNome(@PathVariable String nome) {
		return ResponseEntity.ok().body(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@PostMapping
	public ResponseEntity <Produto> postProduto (@RequestBody Produto produto){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(produto));
	}
	
    @PutMapping
    public ResponseEntity<Produto> UpdateProduct (@RequestBody Produto produto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(repository.save(produto));
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable long id) {
        repository.deleteById(id);

    }
	
}

