package com.marketplace.apimarket.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marketplace.apimarket.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
}
