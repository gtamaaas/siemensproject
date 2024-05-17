package com.example.siemensprojectbackend;

import com.example.siemensprojectbackend.model.Hotel;
import com.example.siemensprojectbackend.repository.HotelRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SiemensProjectBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(SiemensProjectBackEndApplication.class, args);
    }
    @Bean
    CommandLineRunner runner(HotelRepository hotelRepository) {
        return args -> {
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<Hotel>> typeReference = new TypeReference<>() {};
            String json = "[{\"id\":1,\"name\":\"Hotel Ramada\",\"latitude\":46.764654252624204,\"longitude\":23.598674125224626,\"rooms\":[{\"roomNumber\":210,\"type\":2,\"price\":200,\"isAvailable\":true},{\"roomNumber\":125,\"type\":1,\"price\":350,\"isAvailable\":true},{\"roomNumber\":87,\"type\":1,\"price\":300,\"isAvailable\":false}]},{\"id\":2,\"name\":\"Grand Hotel Italia\",\"latitude\":46.7522792440665,\"longitude\":23.605990381045697,\"rooms\":[{\"roomNumber\":41,\"type\":3,\"price\":240,\"isAvailable\":true}]},{\"id\":3,\"name\":\"Hampton by Hilton\",\"latitude\":46.77539900854998,\"longitude\":23.60182699638966,\"rooms\":[{\"roomNumber\":32,\"type\":2,\"price\":410,\"isAvailable\":false},{\"roomNumber\":21,\"type\":2,\"price\":350,\"isAvailable\":true},{\"roomNumber\":64,\"type\":3,\"price\":300,\"isAvailable\":true}]}]";
            List<Hotel> hotels = mapper.readValue(json,typeReference);
            hotelRepository.saveAll(hotels);
            System.out.println("Hotels Saved!");
        };
    }

}
