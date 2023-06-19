package com.example.curso1fullstackspring.services;

import com.example.curso1fullstackspring.entities.*;

import com.example.curso1fullstackspring.repositories.*;
import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository repository;

    public List<Customer> getAll() {
        return (List<Customer>) repository.findAll();
    }

    @Override
    public Customer getById(Long id) {
        return (Customer) repository.findById(id).get();
    }
    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }
    @Override
    public void save(Customer customer) {
        repository.save(customer);
    }
}




