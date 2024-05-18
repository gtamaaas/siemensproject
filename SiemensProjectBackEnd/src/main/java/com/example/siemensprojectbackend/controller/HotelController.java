package com.example.siemensprojectbackend.controller;

import com.example.siemensprojectbackend.model.Hotel;
import com.example.siemensprojectbackend.repository.HotelRepository;
import com.example.siemensprojectbackend.repository.ReservationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(originPatterns = "*")
public class HotelController {

    HotelRepository hotelRepository;
    ReservationRepository reservationRepository;

    public HotelController(HotelRepository hotelRepository, ReservationRepository reservationRepository) {
        this.hotelRepository = hotelRepository;
        this.reservationRepository = reservationRepository;
    }

    @GetMapping("/hotels")
    public List<Hotel> getHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping("/hotels/{id}")
    public Hotel getHotel(@PathVariable Long id) {
        return hotelRepository.findById(id);
    }
}
