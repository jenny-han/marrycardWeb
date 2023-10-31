package com.jnhn.webService.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.jnhn.webService.model.GuestBook;

public interface GuestBookRepository extends JpaRepository<GuestBook, Long> {

    public Page<GuestBook> findByCardId(@Param(value = "cardId") int cardId, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) " +
            "FROM guest_book " +
            "WHERE card_id = :cardId ")
    public Long countByCardId(@Param(value = "cardId") int cardId);

    @Query(nativeQuery = true, value = "SELECT * " +
            "FROM guest_book " +
            "WHERE card_id = :cardId " +
            "ORDER BY create_date DESC ")
    public List<GuestBook> getFirstGuestBooks(
            @Param(value = "cardId") int cardId,
            Pageable pageable);

    @Query(nativeQuery = true, value = "WITH last_record AS ( " +
            "  SELECT create_date " +
            "  FROM guest_book " +
            "  WHERE id = :lastId " +
            ")" +
            "SELECT gb.* " +
            "FROM guest_book gb, last_record l " +
            "WHERE gb.card_id = :cardId " +
            "AND gb.create_date < l.create_date " +
            "ORDER BY create_date DESC " +
            "LIMIT :pageSize ")
    public List<GuestBook> getPartofGuestBooks(
            @Param(value = "cardId") int cardId,
            @Param(value = "lastId") int lastId,
            @Param(value = "pageSize") int pageSize);
}
