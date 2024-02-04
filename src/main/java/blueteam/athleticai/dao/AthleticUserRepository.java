package blueteam.athleticai.dao;

import blueteam.athleticai.entity.AthleticUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AthleticUserRepository extends JpaRepository<AthleticUser, Long> {

    // Custom query to find a user by username and password
    @Query("SELECT a FROM AthleticUser a WHERE a.athleticUsername = :username AND a.athleticPassword = :password")
    Optional<AthleticUser> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
