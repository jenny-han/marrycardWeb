package com.jnhn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

import com.jnhn.model.Test;

public interface TestRepository extends JpaRepository<Test, Long> {

}
