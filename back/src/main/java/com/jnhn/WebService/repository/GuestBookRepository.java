package com.jnhn.webService.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.jnhn.webService.model.GuestBook;

public interface GuestBookRepository extends JpaRepository<GuestBook, Long> {

  @Query(nativeQuery = true, value = "SELECT * FROM guest_book WHERE card_id = :cardId ORDER BY create_date DESC")
  public List<GuestBook> getLastGuestBooks(@Param(value = "cardId") int cardId, Pageable pageable);

  public Page<GuestBook> findByCardId(@Param(value = "cardId") int cardId, Pageable pageable);
}
