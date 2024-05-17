package com.example.siemensprojectbackend.repository;

import com.example.siemensprojectbackend.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
