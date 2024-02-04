package blueteam.athleticai.controller;

import blueteam.athleticai.common.Result;
import blueteam.athleticai.common.Constants;
import blueteam.athleticai.entity.AthleticUser;
import blueteam.athleticai.service.AthleticUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class AthleticUserController {

    private final AthleticUserService userService;

    @Autowired
    public AthleticUserController(AthleticUserService userService) {
        this.userService = userService;
    }

    /**
     * Endpoint for user login. Validates username and password.
     *
     * @param username The username of the user attempting to login.
     * @param password The password of the user.
     * @return ResponseEntity containing the result of the login operation.
     */
    @PostMapping("/login")
    public ResponseEntity<Result> login(@RequestParam String username, @RequestParam String password) {
        Optional<AthleticUser> user = userService.findByUsernameAndPassword(username, password);
        if (user.isPresent()) {
            // User authentication successful
            return ResponseEntity.ok(Result.success("User successfully logged in."));
        } else {
            // User authentication failed
            return ResponseEntity.badRequest().body(Result.error(Constants.CODE_400, "Invalid username or password."));
        }
    }
}

