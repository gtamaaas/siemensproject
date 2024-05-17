package com.example.siemensprojectbackend.controller;

import com.example.siemensprojectbackend.model.Coordinates;
import com.example.siemensprojectbackend.model.CoordinatesRequest;
import com.example.siemensprojectbackend.utils.DistanceCalculator;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DistanceController {

    @PostMapping("/coordinates")
    public double calculateDistanceBetweenTwoPoints(@RequestBody  CoordinatesRequest coordinatesRequest) {
        Coordinates cord1 = coordinatesRequest.getCord1();
        Coordinates cord2 = coordinatesRequest.getCord2();
        return DistanceCalculator.distanceBetweenTwoPoints(cord1, cord2);
    }
}
