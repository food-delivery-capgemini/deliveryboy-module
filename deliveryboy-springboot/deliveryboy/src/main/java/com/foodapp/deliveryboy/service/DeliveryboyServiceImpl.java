package com.foodapp.deliveryboy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.deliveryboy.dao.DeliveryboyDao;
import com.foodapp.deliveryboy.entity.DeliveryboyProfile;

@Service
public class DeliveryboyServiceImpl implements DeliveryboyService {

	@Autowired
	private DeliveryboyDao dao;
	
	@Override
	public DeliveryboyProfile createProfile(DeliveryboyProfile profile) {
		return dao.save(profile);
	}

	@Override
	public DeliveryboyProfile deliveryboyLogin(String email, String password) {
		DeliveryboyProfile profile= dao.findByEmail(email);
		if(profile.getPassword().equals(password))
		{
			return profile;
		}
		return null;
	}

	@Override
	public void updateProfile(DeliveryboyProfile profile) {
		dao.save(profile);
		
	}

	@Override
	public DeliveryboyProfile getUserDetailByMail(String email) {
		
		return dao.findByEmail(email);
	}



	}


