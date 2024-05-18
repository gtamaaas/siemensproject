package com.example.siemensprojectbackend.repository;

import com.example.siemensprojectbackend.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    public List<Reservation> findAllByHotelId(Long id);
}
