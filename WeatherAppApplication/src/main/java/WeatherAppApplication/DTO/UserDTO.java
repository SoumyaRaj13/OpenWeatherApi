package WeatherAppApplication.DTO;


public class UserDTO {
	
	 private String username;
	    private String firstName;

	    public UserDTO() {}
	    public UserDTO(String username, String firstName) {
	        this.username = username;
	        this.firstName = firstName;
	    }
	    // getters/setters
	    public String getUsername(){ return username; }
	    public void setUsername(String u){ this.username = u; }
	    public String getFirstName(){ return firstName; }
	    public void setFirstName(String f){ this.firstName = f; }
	

}

