package com.marketplace.apimarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marketplace.apimarket.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
