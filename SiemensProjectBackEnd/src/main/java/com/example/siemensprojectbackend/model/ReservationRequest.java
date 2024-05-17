package com.example.siemensprojectbackend.model;

import java.time.LocalDate;

public class ReservationRequest {
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Integer price;
    private Integer roomNumber;

    private Integer hotelId;

    public ReservationRequest() {
    }

    public ReservationRequest(LocalDate checkInDate, LocalDate checkoutDate, Integer price, Integer roomNumber, Integer hotelId) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkoutDate;
        this.price = price;
        this.roomNumber = roomNumber;
        this.hotelId = hotelId;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer roomNumber) {
        this.roomNumber = roomNumber;
    }

    @Override
    public String toString() {
        return "ReservationRequest{" +
                "checkInDate=" + checkInDate +
                ", checkoutDate=" + checkOutDate +
                ", price=" + price +
                ", roomNumber=" + roomNumber +
                ", hotelId=" + hotelId +
                '}';
    }
}
