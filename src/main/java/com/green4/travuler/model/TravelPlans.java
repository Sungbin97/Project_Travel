package com.green4.travuler.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "tb_travelPlans", schema = "team4_travel")
public class TravelPlans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String day;

    private String startingPoint;

    private String waypoints;

    private String endPoint;
}
