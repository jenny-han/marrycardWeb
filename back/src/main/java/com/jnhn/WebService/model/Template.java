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
@SequenceGenerator(name = "TEMPLATE_SEQ_GEN", sequenceName = "TEMPLATE_SEQ", initialValue = 1, allocationSize = 1)
@Table(name = "template")
public class Template extends DateTime {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TEMPLATE_SEQ_GEN")
  private int id;

  private String structJson;
}
