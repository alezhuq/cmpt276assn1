package com.example.demo.models;

import jakarta.persistence.*;

@Entity 
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int uid;
    private String name;
    private String password;
    private int size;

    public User(){

    }

    public User(String name, String password, int size){
        this.name = name;
        this.password = password;
        this.size = size;
    }
}
