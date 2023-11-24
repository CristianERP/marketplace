package com.marketplace.apimarket.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.marketplace.apimarket.model.Category;
import com.marketplace.apimarket.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
  public List<Optional<Product>> findByUserId(Integer userId);

  @Query("SELECT p FROM Product p WHERE p.name LIKE %:keyword% OR p.description LIKE %:keyword%")
  public List<Product> findByKeyword(@Param("keyword") String keyword);

  List<Product> findByCategory(Category category);
}
