package com.foodapp.order.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.order.dao.OrderDao;
import com.foodapp.order.entity.Order;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderDao dao;

	@Override
	public List<Order> findAllOrders() {
		return dao.findAll();
	}

}
