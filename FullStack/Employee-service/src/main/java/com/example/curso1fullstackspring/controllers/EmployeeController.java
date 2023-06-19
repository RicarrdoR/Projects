package com.example.curso1fullstackspring.controllers;


import com.example.curso1fullstackspring.entities.*;
import com.example.curso1fullstackspring.services.*;
import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController


public class EmployeeController {
    @Autowired
    private IEmployeeService service;



    @GetMapping("/api/employees")
    public List<Employee> getAll() {
        return service.getAll();
    }
    @GetMapping("/api/employees/{id}")
    public Employee getById(@PathVariable Long id) {
        return service.getById(id);

    }
    @DeleteMapping("/api/employees/{id}")
    public void remove (@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }
    @PostMapping("/api/employees")
    public void save (@RequestBody Employee employee) {
        service.save(employee);
    }
}