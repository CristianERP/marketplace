package com.marketplace.apimarket;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.marketplace.apimarket.model.User;
import com.marketplace.apimarket.service.UserService;
import com.marketplace.apimarket.util.PasswordUtil;

@Component
public class ApplicationStartup implements ApplicationListener<ContextRefreshedEvent> {

  private final UserService userService;

  public ApplicationStartup(UserService userService) {
    this.userService = userService;
  }

  @Override
  public void onApplicationEvent(ContextRefreshedEvent event) {
    if (!userService.isAdminUserExists()) {
      User adminUser = new User();
      adminUser.setName("Admin");
      adminUser.setUsername("userAdmin");
      adminUser.setPhoneNumber("123456789");
      adminUser.setEmail("admin@admin.com");
      adminUser.setPassword(PasswordUtil.encodePassword("adminPassword"));
      adminUser.setRole("admin");

      userService.createAdmin(adminUser);
    }
  }
}
