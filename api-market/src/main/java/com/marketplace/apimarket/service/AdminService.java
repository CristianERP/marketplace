package com.marketplace.apimarket.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marketplace.apimarket.dto.UserResponse;
import com.marketplace.apimarket.model.User;
import com.marketplace.apimarket.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AdminService {

  @Autowired
  private UserRepository userRepository;

  public List<UserResponse> getUsers() {
    List<User> users = userRepository.findAll();
    List<UserResponse> UserResponses = users.stream()
        .filter(user -> user.getRole().equals("user"))
        .map(user -> {
          UserResponse UserResponse = new UserResponse();
          UserResponse.setId(user.getId());
          UserResponse.setName(user.getName());
          UserResponse.setPhoneNumber(user.getPhoneNumber());
          UserResponse.setEmail(user.getEmail());
          UserResponse.setRole(user.getRole());
          return UserResponse;
        })
        .collect(Collectors.toList());

    return UserResponses;
  }

  public UserResponse getUserById(Integer id) {
    Optional<User> userOptional = userRepository.findById(id);
    if (userOptional.isPresent()) {
      User user = userOptional.get();
      UserResponse userResponse = new UserResponse();
      userResponse.setName(user.getName());
      userResponse.setEmail(user.getEmail());
      userResponse.setPhoneNumber(user.getPhoneNumber());
      userResponse.setRole(user.getRole());
      return userResponse;
    } else {
      throw new EntityNotFoundException(String.format("No existe usuario con id: %d", id));
    }
  }

}
