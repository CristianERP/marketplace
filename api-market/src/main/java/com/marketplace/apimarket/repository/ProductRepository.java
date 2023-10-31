package com.marketplace.apimarket.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marketplace.apimarket.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
  public List<Optional<Product>> findByUserId(Integer userId);
}
