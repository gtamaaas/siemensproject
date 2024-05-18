package com.example.siemensprojectbackend.controller;

import com.example.siemensprojectbackend.model.Hotel;
import com.example.siemensprojectbackend.model.HotelAndReservations;
import com.example.siemensprojectbackend.model.Reservation;
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
    public HotelAndReservations getHotelAndReservations(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id);
        HotelAndReservations hotelAndReservations = new HotelAndReservations();
        hotelAndReservations.setHotel(hotel);
        List<Reservation> reservations = reservationRepository.findAllByHotelId(id);
        hotelAndReservations.setReservationList(reservations);
        return hotelAndReservations;
    }
}
