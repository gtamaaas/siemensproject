package com.example.siemensprojectbackend.controller;


import com.example.siemensprojectbackend.model.Reservation;
import com.example.siemensprojectbackend.model.ReservationRequest;
import com.example.siemensprojectbackend.model.Room;
import com.example.siemensprojectbackend.repository.ReservationRepository;
import com.example.siemensprojectbackend.repository.RoomRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;

@RestController
@CrossOrigin(originPatterns = "*")
public class ReservationController {

    RoomRepository roomRepository;
    ReservationRepository reservationRepository;

    public ReservationController(RoomRepository roomRepository, ReservationRepository reservationRepository) {
        this.roomRepository = roomRepository;
        this.reservationRepository = reservationRepository;
    }

    @PostMapping("/reservation")
    public String reservation(@RequestBody List<ReservationRequest> reservationRequests) {
        reservationRequests.forEach(reservationRequest -> {
            Reservation reservation = new Reservation();
            reservation.setHotelId(reservationRequest.getHotelId());
            LocalDateTime checkinDate = LocalDateTime.of(
                    reservationRequest.getCheckInDate(), LocalTime.of(12,0)
            );
            reservation.setCheckInDate(checkinDate);
            System.out.println(checkinDate);
            LocalDateTime checkoutDate = LocalDateTime.of(
                    reservationRequest.getCheckOutDate(), LocalTime.of(16,0)
            );
            reservation.setCheckoutDate(checkoutDate);
            System.out.println(checkoutDate);
            reservation.setPrice((int) (reservationRequest.getPrice() * DAYS.between(checkinDate, checkoutDate)));
            System.out.println(reservation.getPrice());
            Room room = roomRepository.findRoomByRoomNumber(reservationRequest.getRoomNumber());
            System.out.println(room);
            reservationRepository.save(reservation);
            System.out.println(reservation);
            room.setReservation(reservation);
            roomRepository.save(room);
        });
        return "asd";
    }
}
