package com.foodapp.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.foodapp.order.entity.Order;

@Service
public interface OrderService {

//	public Order showOrder(Order order);
//
//	public Order orderStatus(int id, String status);
//	public void updateOrder(Order order);

	public List<Order> findAllOrders();

}
