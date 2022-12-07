package com.assessment.java.assessment.controller;

import com.assessment.java.assessment.entity.User;
import com.assessment.java.assessment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/user")
    public ResponseEntity<User> addNewUser(@RequestBody User user){
        User responseBody=userService.addNewUser(user);
        if (responseBody == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            return new ResponseEntity<>(responseBody, HttpStatus.CREATED);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUser(){
        List<User> responseBody = userService.getAllUser();
        if (responseBody==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {
            return new ResponseEntity<>(responseBody, HttpStatus.OK);
        }
    }
}
