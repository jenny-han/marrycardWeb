package com.jnhn.webService.model;

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
@Table(name = "customer")
public class Customer extends DateTime {
  @Id
  private String id;

  private String email;

  private String password;

  private String name;

  private String socialLoginYn;
}
