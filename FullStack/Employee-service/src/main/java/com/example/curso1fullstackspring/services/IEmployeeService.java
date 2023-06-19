package com.example.curso1fullstackspring.services;

import com.example.curso1fullstackspring.entities.*;
import java.util.*;

public interface IEmployeeService {
    List<Employee> getAll();

    Employee  getById(Long id);

    void remove(Long id);

    void save(Employee customer);
}
