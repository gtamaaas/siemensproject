package com.example.siemensprojectbackend.repository;

import com.example.siemensprojectbackend.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {
}
