package com.marketplace.apimarket.jwt;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.marketplace.apimarket.model.User;
import com.marketplace.apimarket.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
  private static final String SECRET_KEY = "my_secret";
  private static final long EXPIRATION_TIME = 864000000; // 10 días en milisegundos

  @Autowired
  private UserService userService;

  public static String generateToken(String email) {
    return Jwts.builder()
        .setSubject(email)
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
        .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
        .compact();
  }

  public static String extractEmail(String token) {
    return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();
  }

  public Boolean verificateUser(String token) {
    String email = extractEmail(token);

    Optional<User> userOptional = userService.findUserByEmail(email);

    return userOptional.isPresent();
  }
}
