package com.example.curso1fullstackspring.controllers;


import com.example.curso1fullstackspring.entities.*;
import com.example.curso1fullstackspring.services.*;
import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController


public class SupplierController {
    @Autowired
    private ISupplierService service;



    @GetMapping("/api/suppliers")
    public List<Supplier> getAll() {
        return service.getAll();
    }
    @GetMapping("/api/suppliers/{id}")
    public Supplier getById(@PathVariable Long id) {
        return service.getById(id);

    }
    @DeleteMapping("/api/suppliers/{id}")
    public void remove (@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }
    @PostMapping("/api/suppliers")
    public void save (@RequestBody Supplier supplier) {service.save(supplier);
    }
}