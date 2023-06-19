package com.example.curso1fullstackspring.controllers;


import com.example.curso1fullstackspring.entities.*;
import com.example.curso1fullstackspring.services.*;
import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController


public class CustomerController {
    @Autowired
    private ICustomerService service;



    @GetMapping("/api/customers")
    public List<Customer> getAll() {
        return service.getAll();
    }
    @GetMapping("/api/customers/{id}")
    public Customer getById(@PathVariable Long id) {
        return service.getById(id);

    }
    @DeleteMapping("/api/customers/{id}")
    public void remove (@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }
    @PostMapping("/api/customers")
    public void save (@RequestBody Customer customer) {
        service.save(customer);
    }
}