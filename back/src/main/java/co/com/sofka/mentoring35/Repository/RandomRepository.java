package co.com.sofka.mentoring35.Repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import co.com.sofka.mentoring35.Model.Random;

public interface RandomRepository extends ReactiveCrudRepository<Random, String> {
    
}
