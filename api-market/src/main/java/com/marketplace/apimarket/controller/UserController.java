package com.marketplace.apimarket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marketplace.apimarket.service.UserService;

@RestController
@RequestMapping(path = "/api")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/user/norestringido")
  public ResponseEntity<String> getMessage() {
    return new ResponseEntity<String>("Public message", HttpStatus.OK);
  }

  @GetMapping("/productos/restringido")
  public ResponseEntity<String> getMessageRes() {
    return new ResponseEntity<String>("Private message", HttpStatus.OK);
  }

}
