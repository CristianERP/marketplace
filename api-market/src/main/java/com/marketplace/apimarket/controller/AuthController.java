package com.marketplace.apimarket.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marketplace.apimarket.dto.LoginRequest;
import com.marketplace.apimarket.dto.RegisterRequest;
import com.marketplace.apimarket.jwt.JwtUtil;
import com.marketplace.apimarket.model.User;
import com.marketplace.apimarket.service.UserService;

@RestController
@RequestMapping(path = "/auth")
public class AuthController {
  @Autowired
  private UserService userService;

  @PostMapping("/register")
  public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
    Optional<User> existingUser = userService.findUserByEmail(request.getEmail());
    if (existingUser.isPresent()) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El correo electrónico ya está en uso.");
    }

    userService.registerUser(request);
    return ResponseEntity.ok("Usuario registrado correctamente.");
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody LoginRequest request) {
    String email = request.getEmail();
    String password = request.getPassword();

    if (email == null || password == null) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email o password vacio.");
    }

    if (userService.authenticateUser(request)) {
      String token = JwtUtil.generateToken(email);
      return ResponseEntity.ok(token);
    } else {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas.");
    }
  }
}
