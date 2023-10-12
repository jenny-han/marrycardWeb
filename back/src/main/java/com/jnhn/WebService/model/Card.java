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
@Table(name = "card")
public class Card {
  @Id
  private int id;

  private String url;

  private String creatorId;

  private int templateId;

  private String dataJson;

  private String status;

  private Date createDate;

  private Date modifyDate;
}
