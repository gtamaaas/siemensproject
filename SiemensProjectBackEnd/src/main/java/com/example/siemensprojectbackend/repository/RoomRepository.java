package com.example.siemensprojectbackend.repository;

import com.example.siemensprojectbackend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
    public Room findRoomByRoomNumber(Long roomNumber);
}
