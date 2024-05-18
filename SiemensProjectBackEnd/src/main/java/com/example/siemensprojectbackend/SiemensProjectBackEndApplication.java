package com.example.siemensprojectbackend;

import com.example.siemensprojectbackend.model.Coordinates;
import com.example.siemensprojectbackend.model.Hotel;
import com.example.siemensprojectbackend.repository.HotelRepository;
import com.example.siemensprojectbackend.utils.DistanceCalculator;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.InputStream;
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
            InputStream inputStream = TypeReference.class.getResourceAsStream("/hotels.json");
            List<Hotel> hotels = mapper.readValue(inputStream,typeReference);
            hotelRepository.saveAll(hotels);
            System.out.println("Hotels Saved!");
        };
    }

}
