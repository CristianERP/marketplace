package com.marketplace.apimarket.dto;

import com.marketplace.apimarket.model.Category;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class ProductResponse {
  private Integer id;
  private String name;
  private String description;
  private double price;
  private Integer stock;
  private Category category;
  private UserResponse user;
  @Lob
  @Column(length = 1048576)
  private byte[] imageData;

}
