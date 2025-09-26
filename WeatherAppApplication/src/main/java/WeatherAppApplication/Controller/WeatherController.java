package WeatherAppApplication.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import WeatherAppApplication.DTO.WeatherDTO;
import WeatherAppApplication.Service.WeatherService;



@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:3000")

public class WeatherController {
	
	
	
	    @Autowired 
	    private WeatherService weatherService;

	    @GetMapping
	    public WeatherDTO currentWeather(@RequestParam(defaultValue = "Mumbai") String city) {
	        return weatherService.getWeatherByCity(city);
	    }
	    
	    @GetMapping("/forecast")
	    public JsonNode forecast(@RequestParam String city) {
	        return weatherService.getForecastByCity(city);
	    }

	}


