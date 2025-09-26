package WeatherAppApplication.Service;



import com.fasterxml.jackson.databind.JsonNode;

import WeatherAppApplication.DTO.WeatherDTO;

import org.springframework.beans.factory.annotation.Value;
	import org.springframework.stereotype.Service;
	import org.springframework.web.client.RestTemplate;

	@Service
	public class WeatherService {
	    private final RestTemplate rest = new RestTemplate();

	    @Value("${openweathermap.api.key}")
	    private String apiKey;

	    public WeatherAppApplication.DTO.WeatherDTO getWeatherByCity(String city) {
	        try {
	        	
	        	 String url = "https://api.openweathermap.org/data/2.5/weather?q=" 
	                       + city + "&units=metric&appid=" + apiKey;

	        	
//	            String url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=b432423c9b34e080da00a78f925da054";
//	            String url = "String url = \"https://api.openweathermap.org/data/2.5/weather?q=india&appid=b432423c9b34e080da00a78f925da054";
	            JsonNode root = rest.getForObject(url, JsonNode.class, city, apiKey);
	            if (root == null) throw new RuntimeException("No response");

	            double temp = root.path("main").path("temp").asDouble();
	            String cond = root.path("weather").get(0).path("main").asText("");
	            String loc = root.path("name").asText(city);
	            double precipitation = root.has("rain") ? root.path("rain").path("1h").asDouble(0.0) : 0.0;
	            int humidity = root.path("main").path("humidity").asInt(0);
	            double wind = root.path("wind").path("speed").asDouble(0.0);

	            return new WeatherDTO(temp, cond, loc, precipitation, humidity, wind);
	        } catch (Exception e) {
	            return new WeatherDTO(Double.NaN, "Unavailable", city, 0, 0, 0);
	        }
	    }
	    
	    public JsonNode getForecastByCity(String city) {
	        try {
	            String url = "https://api.openweathermap.org/data/2.5/forecast?q="
	                       + city + "&units=metric&appid=" + apiKey;
	            return rest.getForObject(url, JsonNode.class);
	        } catch (Exception e) {
	            return null;
	        }
	    }

	}




