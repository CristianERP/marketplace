package com.marketplace.apimarket.dto;

import lombok.Data;

@Data
public class AuthenticationResponse {
  private String name;
  private String role;
  private String token;
}
