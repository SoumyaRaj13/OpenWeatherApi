package WeatherAppApplication.Service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	    private final Map<String,String> firstNames = Map.of(
	        "bhavesh", "Bhavesh",
	        "alice", "Alice"
	    );

	    public String getFirstName(String username) {
	        return firstNames.get(username);
	    }
	}

