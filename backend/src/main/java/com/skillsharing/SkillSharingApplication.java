package com.skillsharing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SkillSharingApplication {
    public static void main(String[] args) {
        SpringApplication.run(SkillSharingApplication.class, args);
    }
} 