package com.jnhn.webService.domain.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jnhn.webService.model.GuestBook;
import com.jnhn.webService.model.Test;
import com.jnhn.webService.domain.sample.service.SampleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

// import lombok.RequiredArgsConstructor;

@Tag(name = "sample api", description = "sample test api")
@RequestMapping("/api/sample")
@RestController
// @RequiredArgsConstructor
public class SampleController {

  @Autowired
  SampleService sampleService;

  @Operation(summary = "조회", description = "test search")
  @GetMapping("/test")
  public List<Test> test() {
    return sampleService.getTestList();
  }

  @Operation(summary = "방명록샘플전체조회", description = "guest book sample search")
  @GetMapping("/guestbooks")
  public List<GuestBook> getGuestBooks() {
    return sampleService.getGuestbookList();
  }

  @Operation(summary = "방명록샘플처음조회", description = "guest book sample search")
  @GetMapping("/guestbooks/page")
  public List<GuestBook> getFirstGuestBooks(
      @RequestParam int cardId,
      @RequestParam int pageNumber,
      @RequestParam int pageSize) {
    return sampleService.getFirstGuestBooks(cardId, pageNumber, pageSize);
  }

  @Operation(summary = "방명록샘플일부조회", description = "guest book sample search")
  @GetMapping("/guestbooks/page/lastId")
  public List<GuestBook> getPartofGuestBooks(
      @RequestParam int cardId,
      @RequestParam int lastId,
      @RequestParam int pageSize) {
    return sampleService.getPartofGuestBooks(cardId, lastId, pageSize);
  }

  @Operation(summary = "방명록샘플등록", description = "guest book list insert")
  @PostMapping("/guestbook")
  public Integer insertGuestBook(@RequestBody GuestBook guestBook) {
    return sampleService.saveGuestbook(guestBook);
  }

  @Operation(summary = "방명록샘플삭제", description = "guest book sample delete")
  @DeleteMapping("/guestbook")
  public Integer deleteGuestBook(@RequestBody GuestBook guestBook) {
    return sampleService.deleteGuestbook(guestBook);
  }
}