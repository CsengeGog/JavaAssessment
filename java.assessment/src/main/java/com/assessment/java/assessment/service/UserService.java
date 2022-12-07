package com.assessment.java.assessment.service;

import com.assessment.java.assessment.entity.User;
import com.assessment.java.assessment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    public User addNewUser(User user){
        return userRepository.save(user);
    }

}
