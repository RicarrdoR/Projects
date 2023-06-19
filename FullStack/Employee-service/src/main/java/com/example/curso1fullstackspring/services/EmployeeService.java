package com.example.curso1fullstackspring.services;

import com.example.curso1fullstackspring.entities.*;
import com.example.curso1fullstackspring.repositories.*;
import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getAll() {
        return (List<Employee>) repository.findAll();
    }

    @Override
    public Employee getById(Long id) {
        return (Employee) repository.findById(id).get();
    }
    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }
    @Override
    public void save(Employee employee) {repository.save(employee);
    }
}




