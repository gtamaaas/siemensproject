package com.example.siemensprojectbackend.model;

import java.util.List;

public class HotelAndReservations {
    private Hotel hotel;
    private List<Reservation> reservationList;

    public HotelAndReservations() {
    }

    public HotelAndReservations(Hotel hotel, List<Reservation> reservationList) {
        this.hotel = hotel;
        this.reservationList = reservationList;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public List<Reservation> getReservationList() {
        return reservationList;
    }

    public void setReservationList(List<Reservation> reservationList) {
        this.reservationList = reservationList;
    }
}
