package com.marketplace.apimarket.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marketplace.apimarket.dto.DetailOrderRequest;
import com.marketplace.apimarket.dto.OrderRequest;
import com.marketplace.apimarket.model.DetailOrder;
import com.marketplace.apimarket.model.Order;
import com.marketplace.apimarket.model.Product;
import com.marketplace.apimarket.repository.OrderRepository;
import com.marketplace.apimarket.repository.ProductRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class OrderService {
  @Autowired
  private OrderRepository orderRepository;

  @Autowired
  private ProductRepository productRepository;

  public Order createOrder(int userId, OrderRequest orderRequest) {
    Order order = new Order();
    order.setDate(orderRequest.getDate());
    order.setUserId(userId);
    order.setDeliveryAddress(orderRequest.getDeliveryAddress());
    order.setStatus(orderRequest.getStatus());

    List<DetailOrder> detailOrders = new ArrayList<>();
    double totalOrder = 0;

    for (DetailOrderRequest detailOrderRequest : orderRequest.getDetailOrder()) {
      Optional<Product> productOptional = productRepository.findById(detailOrderRequest.getIdProduct());
      if (productOptional.isPresent()) {
        Product product = productOptional.get();

        DetailOrder detailOrder = new DetailOrder();
        detailOrder.setProduct(product);
        detailOrder.setAmount(detailOrderRequest.getAmount());
        detailOrder.setTotal(detailOrderRequest.getTotal());
        detailOrder.setOrder(order);
        totalOrder += detailOrderRequest.getTotal();
        detailOrders.add(detailOrder);
      }
    }

    order.setDetailOrder(detailOrders);
    order.setTotalOrder(totalOrder);
    return orderRepository.save(order);

  }

  public Order getOrder(Integer id) {

    Optional<Order> orderOptional = orderRepository.findById(id);
    if (orderOptional.isPresent()) {
      return orderOptional.get();
    } else {
      throw new EntityNotFoundException("Producto no encontrado con ID: " + id);
    }

  }

  public List<Order> getOrdersUser(Integer userId) {
    return orderRepository.findByUserId(userId);
  }
}
