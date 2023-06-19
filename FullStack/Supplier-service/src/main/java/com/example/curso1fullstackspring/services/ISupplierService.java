package com.example.curso1fullstackspring.services;

import com.example.curso1fullstackspring.entities.*;
import java.util.*;

public interface ISupplierService {
    List<Supplier> getAll();

    Supplier getById(Long id);

    void remove(Long id);

    void save(Supplier supplier);
}
