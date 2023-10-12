package com.jnhn.webService.domain.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jnhn.webService.model.Test;
import com.jnhn.webService.domain.sample.service.SampleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

// import lombok.RequiredArgsConstructor;

@Tag(name = "sample api", description = "sample test api")
@RestController
// @RequiredArgsConstructor
public class SampleController {

  @Autowired
  SampleService sampleService;

  @Operation(summary = "조회", description = "sample search")
  @GetMapping("/sample")
  public List<Test> sample() {
    return sampleService.getTestList();
  }
}