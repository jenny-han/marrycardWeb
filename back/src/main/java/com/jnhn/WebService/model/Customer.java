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
@Table(name = "customer")
public class Customer {
  @Id
  private String id;

  private String email;

  private String password;

  private String name;

  private String socialLoginYn;

  private Date createDate;

  private Date modifyDate;
}
