package com.marketplace.apimarket.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marketplace.apimarket.model.Product;
import com.marketplace.apimarket.repository.ProductRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProductService {
  @Autowired
  private ProductRepository productRepository;

  public List<Product> getProducts() {
    return productRepository.findAll();
  }

  public Product getProductById(Integer id) {

    Optional<Product> productOptional = productRepository.findById(id);
    if (productOptional.isPresent()) {
      Product product = productOptional.get();
      return product;
    } else {
      throw new EntityNotFoundException("Producto no encontrado con ID: " + id);
    }

  }

  public List<Product> getProductsUser(Integer idUser) {
    List<Optional<Product>> productsOptional = productRepository.findByUserId(idUser);

    List<Product> products = productsOptional
        .stream()
        .filter(Optional::isPresent)
        .map(Optional::get)
        .collect(Collectors.toList());

    return products;
  }

  public Product createProduct(Product product) {
    Product newProduct = new Product();

    newProduct.setName(product.getName());
    newProduct.setDescription(product.getDescription());
    newProduct.setPrice(product.getPrice());
    newProduct.setStock(product.getStock());

    return productRepository.save(product);
  }

  public Product updateProduct(Integer id, Product newProduct) {
    Optional<Product> optionalProduct = productRepository.findById(id);
    if (optionalProduct.isPresent()) {
      Product productRespond = optionalProduct.get();

      if (newProduct.getName() != null) {
        productRespond.setName(newProduct.getName());
      }

      if (newProduct.getDescription() != null) {
        productRespond.setDescription(newProduct.getDescription());
      }

      if (newProduct.getStock() != null) {
        if (newProduct.getStock() >= 0) {
          productRespond.setStock(newProduct.getStock());
        }
      }

      if (newProduct.getPrice() != 0) {
        productRespond.setPrice(newProduct.getPrice());
      }

      productRepository.save(productRespond);
      return productRespond;

    } else {
      throw new EntityNotFoundException("Producto no encontrado con ID: " + id);
    }
  }

  public void deleteProduct(Integer id) {
    Optional<Product> optionalProduct = productRepository.findById(id);
    if (optionalProduct.isPresent()) {
      productRepository.deleteById(id);
    } else {
      throw new EntityNotFoundException("Producto no encontrado con ID: " + id);
    }

  }

}
