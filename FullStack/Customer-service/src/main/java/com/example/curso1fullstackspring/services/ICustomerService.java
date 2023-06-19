package com.example.curso1fullstackspring.services;

import com.example.curso1fullstackspring.entities.*;
import java.util.*;

public interface ICustomerService {
    List<Customer> getAll();

    Customer getById(Long id);

    void remove(Long id);

    void save(Customer customer);
}
