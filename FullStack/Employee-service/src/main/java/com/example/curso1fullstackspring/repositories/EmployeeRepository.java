package com.example.curso1fullstackspring.repositories;


import com.example.curso1fullstackspring.entities.*;
import org.springframework.data.repository.*;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository <Employee, Long> {

}
