package com.marketplace.apimarket.dto;

import lombok.Data;

@Data
public class RegisterRequest {

  private String name;
  private String phoneNumber;
  private String email;
  private String password;
}
