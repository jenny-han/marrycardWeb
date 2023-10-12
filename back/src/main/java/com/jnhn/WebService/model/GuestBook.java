package com.jnhn.webService.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "guest_book")
public class GuestBook {
  @Id
  private int id;

  private int cardId;

  private String name;

  private String contents;

  private String password;

  private Date createDate;

  private Date modifyDate;
}
