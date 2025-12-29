// package com.movieapp.server.entity;
// import jakarta.persistence.ElementCollection;
// import jakarta.persistence.Embeddable;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.Data;
// import lombok.Getter;
// import lombok.Setter;

// import java.time.LocalDate;
// import java.util.*;


// @Table(name = "movieDb")
// @Entity
// public class Movie {
//     @Id
//     private String id;

//     private String title;
//     private String description;
//     private LocalDate releaseDate;

//     private String posterUrl;
//     private String backdropUrl;
//     private Double rating;

//     private Integer duration;
//     private String language;
//     private String ageRating;

//     private String director;
//     private String trailerUrl;
//     private Boolean isTrending;

//     @ElementCollection
//     private List<String> genres=new ArrayList<>();

//     // @ElementCollection
//     // private List<CastMember> cast=new ArrayList<>();

//     // @ElementCollection
//     // private List<String> tags=new ArrayList<>();

//     @ElementCollection
//     private List<String> platforms=new ArrayList<>();
// }



