package com.foodapp.deliveryboy.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foodapp.deliveryboy.entity.DeliveryboyProfile;

@Repository
public interface DeliveryboyDao extends MongoRepository<DeliveryboyProfile, String> {

	

	DeliveryboyProfile findByEmail(String email);

 
}
