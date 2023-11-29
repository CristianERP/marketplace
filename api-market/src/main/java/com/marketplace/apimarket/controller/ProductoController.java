package com.marketplace.apimarket.controller;

import java.io.IOException;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
// import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

// import com.marketplace.apimarket.dto.ProductRequest;
import com.marketplace.apimarket.dto.ProductResponse;
import com.marketplace.apimarket.model.Category;
import com.marketplace.apimarket.model.File;
import com.marketplace.apimarket.model.Product;
import com.marketplace.apimarket.repository.FileRepository;
import com.marketplace.apimarket.service.ProductService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
// import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/products")
public class ProductoController {

  @Autowired
  private FileRepository fileRepository;

  @Autowired
  private ProductService productService;

  @GetMapping
  public ResponseEntity<List<ProductResponse>> getProducts() {
    return ResponseEntity.ok(productService.getProducts());
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getProduct(@PathVariable Integer id) {
    try {
      ProductResponse productRespond = productService.getProductById(id);
      return ResponseEntity.ok(productRespond);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

  }

  @GetMapping("/category")
  public ResponseEntity<?> getProductsByCategory(@RequestBody Category category) {
    try {
      List<ProductResponse> products = productService.getProductsByCategory(category);
      return ResponseEntity.ok(products);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
  }

  @GetMapping("/search")
  public ResponseEntity<?> searchProductsByKeyword(@RequestParam("keyword") String keyword) {
    try {
      List<ProductResponse> products = productService.getProductsByKeyword(keyword);
      return ResponseEntity.ok(products);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
  }

  @GetMapping("/user")
  public ResponseEntity<?> getProductsUser(HttpServletRequest request) {
    try {
      int id = (int) request.getAttribute("id");
      List<Product> productsRespond = productService.getProductsUser(id);
      return ResponseEntity.ok(productsRespond);
    } catch (EntityNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

  }

  // @GetMapping("/user/sold")
  // public ResponseEntity<?> getProductsUserSold(HttpServletRequest request) {
  // int id = (int) request.getAttribute("id");
  // productService.getProductsSold(id);
  // return ResponseEntity.ok("ok");

  // }

  @PostMapping("/upload")
  public String uploadFile(@RequestParam("productName") String productName,
      @RequestParam("file") MultipartFile file) {
    try {
      byte[] fileData = file.getBytes();

      // Guardar los datos del archivo en la base de datos
      File fileEntity = new File();
      fileEntity.setFileName(file.getOriginalFilename());
      fileEntity.setImageData(fileData);

      fileRepository.save(fileEntity);
      // Guardar en la base de datos utilizando JPA/Hibernate
      // entityManager.persist(fileEntity);

      return "Archivo guardado en la base de datos: " + file.getOriginalFilename();
    } catch (IOException e) {
      return "Error al guardar el archivo: " + e.getMessage();
    }
  }

  @PostMapping
  public ResponseEntity<?> createProduct(
      HttpServletRequest request,
      @RequestParam("name") String name,
      @RequestParam("description") String description,
      @RequestParam("price") double price,
      @RequestParam("stock") int stock,
      @RequestParam("idCategory") int idCategory,
      @RequestParam("imageFile") MultipartFile imageFile) {

    int idUser = (int) request.getAttribute("id");
    try {
      productService.createProduct(name, description, price, stock, idCategory, idUser, imageFile);
    } catch (IOException e) {
      e.printStackTrace();
    }
    return ResponseEntity.status(HttpStatus.CREATED).body("Producto creado correctamente.");
  }

  // @PostMapping
  // public ResponseEntity<?> createProduct(HttpServletRequest request, @Valid
  // @RequestBody Product producto) {

  // int id = (int) request.getAttribute("id");
  // producto.setUserId(id);

  // productService.createProduct(producto);
  // return ResponseEntity.status(HttpStatus.CREATED).body("Producto creado
  // correctamente.");
  // }

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
