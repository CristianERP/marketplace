package com.marketplace.apimarket.dto;

import lombok.Data;

@Data
public class UserResponse {
  private String name;
  private String email;
  private String phoneNumber;
  private String role;
}
