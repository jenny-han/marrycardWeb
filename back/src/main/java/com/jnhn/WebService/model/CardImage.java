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
@Table(name = "card_image")
public class CardImage {
  @Id
  private int id;

  private int cardId;

  private String imageName;

  private String imageType;

  private String contentsType;

  private String imageData;

  private Date createDate;

  private Date modifyDate;
}
