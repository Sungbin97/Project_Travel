package com.green4.travuler.controller;

import com.green4.travuler.model.TravelPlans;
import com.green4.travuler.repository.TravelPlansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class TravelPlansController {

    @Autowired
    private TravelPlansRepository travelPlansRepository;

    @PostMapping("/savePlans")
    public ResponseEntity<String> saveData(@RequestBody List<TravelPlans> travelPlansList) {
        System.out.println(travelPlansList);
        try {
            travelPlansRepository.saveAll(travelPlansList);
            return ResponseEntity.ok().body("성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("에러: " + e.getMessage());
        }
    }

}

