package com.marketplace.apimarket.dto;

import lombok.Data;

@Data
public class UserRequest {
  private String name;
  private String username;
  private String phoneNumber;
  private String email;
  private String role;
}
