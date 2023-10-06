package com.jnhn.webService.domain.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

import com.jnhn.webService.domain.sample.model.Test;

public interface TestRepository extends JpaRepository<Test, Long> {

}
