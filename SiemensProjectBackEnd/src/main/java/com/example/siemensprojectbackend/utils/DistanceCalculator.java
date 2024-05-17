package com.example.siemensprojectbackend.utils;

import com.example.siemensprojectbackend.model.Coordinates;

public class DistanceCalculator {

    public static double distanceBetweenTwoPoints(Coordinates cord1, Coordinates cord2) {
        double lat1 = cord1.getLatitude();
        double lon1 = cord1.getLongitude();
        double lat2 = cord2.getLatitude();
        double lon2 = cord2.getLongitude();
        double distanceInMeters = org.apache.lucene.util.SloppyMath.haversinMeters(lat1, lon1, lat2, lon2);
        return distanceInMeters / 1000;
    }
}
