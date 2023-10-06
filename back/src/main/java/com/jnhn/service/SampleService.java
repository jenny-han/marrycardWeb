package com.jnhn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jnhn.model.Test;
import com.jnhn.repository.TestRepository;

@Service
public class SampleService {

  @Autowired
  TestRepository testRepository;

  public List<Test> getTestList() {
    return testRepository.findAll();
  }
}
