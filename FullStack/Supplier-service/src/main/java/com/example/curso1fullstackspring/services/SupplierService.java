package com.example.curso1fullstackspring.services;

import com.example.curso1fullstackspring.entities.*;
import com.example.curso1fullstackspring.repositories.*;
import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class SupplierService implements ISupplierService {

    @Autowired
    private SupplierRepository repository;

    public List<Supplier> getAll() {
        return (List<Supplier>) repository.findAll();
    }

    @Override
    public Supplier getById(Long id) {return (Supplier) repository.findById(id).get();
    }
    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }
    @Override
    public void save(Supplier supplier) {repository.save(supplier);
    }
}




