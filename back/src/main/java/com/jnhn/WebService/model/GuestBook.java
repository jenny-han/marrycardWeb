package com.jnhn.webService.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@Entity
@SuperBuilder
@NoArgsConstructor
@SequenceGenerator(name = "GUEST_BOOK_SEQ_GEN", sequenceName = "GUEST_BOOK_SEQ", initialValue = 1, allocationSize = 1)
@Table(name = "guest_book")
public class GuestBook extends DateTime {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GUEST_BOOK_SEQ_GEN")
  private Long id;

  private int cardId;

  private String name;

  private String contents;

  private String password;

}
