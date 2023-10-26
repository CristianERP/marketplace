package com.marketplace.apimarket.jwt;

import java.io.IOException;

import org.springframework.http.HttpMethod;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtFilter extends OncePerRequestFilter {

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    if (request.getMethod().equals(HttpMethod.OPTIONS.name())) {
      filterChain.doFilter(request, response);
      return;
    }

    if (request.getServletPath().matches("/auth/login|/auth/register")) {
      filterChain.doFilter(request, response);
      return;
    }

    final String header = request.getHeader("Authorization");

    if (header == null || !header.startsWith("Bearer ")) {
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token no proporcionado");
      return;
    }

    final String token = header.substring(7);

    try {
      // Verificar el token
      String email = JwtUtil.extractEmail(token);

      request.setAttribute("email", email);

      filterChain.doFilter(request, response);
    } catch (ExpiredJwtException e) {
      System.out.println("expirdo");
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token expirado");
    } catch (Exception e) {
      System.out.println("Invalido");
      System.out.println(e);
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token inválido");
    }
  }
}
