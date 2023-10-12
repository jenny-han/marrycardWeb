package com.jnhn.webService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

import com.jnhn.webService.model.TemplateImage;

public interface TemplateImageRepository extends JpaRepository<TemplateImage, Long> {

}
