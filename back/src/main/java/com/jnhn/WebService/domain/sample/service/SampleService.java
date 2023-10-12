package com.jnhn.webService.domain.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jnhn.webService.model.Test;
import com.jnhn.webService.repository.TestRepository;

@Service
public class SampleService {

  @Autowired
  TestRepository testRepository;

  public List<Test> getTestList() {
    return testRepository.findAll();
  }
}
