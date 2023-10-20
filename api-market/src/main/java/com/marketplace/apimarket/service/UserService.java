package com.marketplace.apimarket.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marketplace.apimarket.dto.LoginRequest;
import com.marketplace.apimarket.dto.RegisterRequest;
import com.marketplace.apimarket.model.User;
import com.marketplace.apimarket.repository.UserRepository;
import com.marketplace.apimarket.util.PasswordUtil;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public void registerUser(RegisterRequest request) {
    User user = new User();
    user.setName(request.getName());
    user.setPhoneNumber(request.getPhoneNumber());
    user.setEmail(request.getEmail());
    user.setPassword(PasswordUtil.encodePassword(request.getPassword()));

    userRepository.save(user);
  }

  public boolean authenticateUser(LoginRequest request) {
    Optional<User> userOptional = findUserByEmail(request.getEmail());
    if (userOptional.isPresent()) {
      User user = userOptional.get();
      return PasswordUtil.verifyPassword(request.getPassword(), user.getPassword());
    }
    return false;
  }

  public Optional<User> findUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }
}
