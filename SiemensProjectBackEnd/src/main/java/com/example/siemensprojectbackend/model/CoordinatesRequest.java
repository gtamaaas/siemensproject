package com.example.siemensprojectbackend.model;

public class CoordinatesRequest {
   private Coordinates cord1;
   private Coordinates cord2;

    public CoordinatesRequest() {
    }

    public CoordinatesRequest(Coordinates cord1, Coordinates cord2) {
        this.cord1 = cord1;
        this.cord2 = cord2;
    }

    public Coordinates getCord1() {
        return cord1;
    }

    public void setCord1(Coordinates cord1) {
        this.cord1 = cord1;
    }

    public Coordinates getCord2() {
        return cord2;
    }

    public void setCord2(Coordinates cord2) {
        this.cord2 = cord2;
    }
}
