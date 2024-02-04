package blueteam.athleticai.service.impl;

import blueteam.athleticai.dao.AthleticUserRepository;
import blueteam.athleticai.entity.AthleticUser;
import blueteam.athleticai.service.AthleticUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AthleticUserServiceImpl implements AthleticUserService {

    private final AthleticUserRepository userRepository;

    @Autowired
    public AthleticUserServiceImpl(AthleticUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<AthleticUser> findByUsernameAndPassword(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

}
