package com.assessment.java.assessment.repository;

import com.assessment.java.assessment.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository <User, String> {
}
