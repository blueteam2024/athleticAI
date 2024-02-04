package blueteam.athleticai.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "athletic_user")
@Data
@NoArgsConstructor
public class AthleticUser {

    @Id
    @Column(name = "athletic_id")
    private Long athleticId;

    @Column(name = "athletic_username")
    private String athleticUsername;

    @Column(name = "athletic_password")
    private String athleticPassword;


    // No need for explicit getters and setters with @Data annotation
    // Lombok will generate them for you
}
