package com.foodapp.deliveryboy.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class DeliveryboyProfile {
	
	
	@Id
	private String email;
	private String name;
	private String password;
	private long contact;
	private String address;
	public DeliveryboyProfile() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DeliveryboyProfile(String name, String email, String password, long contact, String address) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.contact = contact;
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	

}
