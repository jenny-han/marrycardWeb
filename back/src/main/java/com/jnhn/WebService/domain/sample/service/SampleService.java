package com.jnhn.webService.domain.sample.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.jnhn.webService.model.Test;
import com.jnhn.webService.model.GuestBook;
import com.jnhn.webService.repository.TestRepository;
import com.jnhn.webService.repository.GuestBookRepository;

@Service
public class SampleService {

  @Autowired
  TestRepository testRepository;

  @Autowired
  GuestBookRepository guestBookRepository;

  public List<Test> getTestList() {
    return testRepository.findAll();
  }

  public List<GuestBook> getGuestbookList() {
    return guestBookRepository.findAll();
  }

  public Page<GuestBook> findByCardId(int cardId, int pageNumber, int pageSize) {
    return guestBookRepository.findByCardId(cardId, PageRequest.of(pageNumber, pageSize));
  }

  public List<GuestBook> getFirstGuestBooks(int cardId, int pageNumber, int pageSize) {
    return guestBookRepository.getFirstGuestBooks(cardId, PageRequest.of(pageNumber, pageSize));
  }

  public List<GuestBook> getPartofGuestBooks(int cardId, int lastId, int pageSize) {
    return guestBookRepository.getPartofGuestBooks(cardId, lastId, pageSize);
  }

  public Integer saveGuestbook(GuestBook guestBook) {
    guestBook.setCardId(1);
    guestBook.setCreateDate();
    GuestBook gb = guestBookRepository.save(guestBook);

    return Long.valueOf(gb.getId()).intValue();
  }

  public Integer deleteGuestbook(GuestBook guestBook) {
    int result = 0;
    Optional<GuestBook> guestBookOptional = guestBookRepository.findById(guestBook.getId());

    if (guestBookOptional.isPresent()) {
      GuestBook readData = guestBookOptional.get();
      if (guestBook.getPassword().equals(readData.getPassword())) {
        guestBookRepository.delete(readData);
        result = 1;
      } else {
        result = -1;
      }
    }

    return result;
  }
}
