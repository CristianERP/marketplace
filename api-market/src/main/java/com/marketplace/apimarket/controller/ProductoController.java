package com.marketplace.apimarket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marketplace.apimarket.model.Product;
import com.marketplace.apimarket.service.ProductService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/products")
public class ProductoController {
  @Autowired
  private ProductService productService;

  @GetMapping
  public ResponseEntity<List<Product>> getProducts() {
    return ResponseEntity.ok(productService.getProducts());
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getProduct(@PathVariable Integer id) {
    try {
      Product productRespond = productService.getProductById(id);
      return ResponseEntity.ok(productRespond);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

  }

  @PostMapping
  public ResponseEntity<?> createProduct(@Valid @RequestBody Product producto) {
    productService.createProduct(producto);
    return ResponseEntity.status(HttpStatus.CREATED).body("Producto creado correctamente.");
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody Product newProduct) {
    try {
      Product productRespond = productService.updateProduct(id, newProduct);
      return ResponseEntity.ok(productRespond);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
    try {
      productService.deleteProduct(id);
      return ResponseEntity.ok("Producto eliminado correctamente");
    } catch (EntityNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
  }
}
