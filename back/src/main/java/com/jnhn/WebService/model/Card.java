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

@Getter
@Setter
@Entity
@NoArgsConstructor
@SequenceGenerator(name = "CARD_SEQ_GEN", sequenceName = "CARD_SEQ", initialValue = 1, allocationSize = 1)
@Table(name = "card")
public class Card extends DateTime {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CARD_SEQ_GEN")
  private int id;

  private String url;

  private String creatorId;

  private int templateId;

  private String dataJson;

  private String status;
}
