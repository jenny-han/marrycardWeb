package com.jnhn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jnhn.model.Test;
import com.jnhn.service.SampleService;

// import lombok.RequiredArgsConstructor;

@RestController
// @RequiredArgsConstructor
public class SampleController {

  @Autowired
  SampleService sampleService;

  @GetMapping("/sample")
  public List<Test> sample() {
    return sampleService.getTestList();
  }
}