package WeatherAppApplication.Controller;



import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WeatherAppApplication.DTO.UserDTO;
import WeatherAppApplication.Service.UserService;



@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	

	    @Autowired
	    private UserService userService;
	    

	    @GetMapping("/me")
	    public UserDTO me(Principal principal) {
	        if (principal == null) return new UserDTO("anonymous","User");
	        String first = userService.getFirstName(principal.getName());
	        return new UserDTO(principal.getName(), first == null ? null : first);
	    }
	

}

