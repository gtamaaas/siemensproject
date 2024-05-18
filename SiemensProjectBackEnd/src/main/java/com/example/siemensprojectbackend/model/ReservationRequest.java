package com.example.siemensprojectbackend.model;

import java.time.LocalDate;

public class ReservationRequest {
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Integer price;
    private Long roomNumber;

    private Long hotelId;

    public ReservationRequest() {
    }

    public ReservationRequest(LocalDate checkInDate, LocalDate checkOutDate, Integer price, Long roomNumber, Long hotelId) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.price = price;
        this.roomNumber = roomNumber;
        this.hotelId = hotelId;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
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

    public Long getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Long roomNumber) {
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
