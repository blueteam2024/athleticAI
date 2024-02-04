package blueteam.athleticai.service;

import blueteam.athleticai.entity.AthleticUser;
import java.util.Optional;

public interface AthleticUserService {

    Optional<AthleticUser> findByUsernameAndPassword(String username, String password);

}
