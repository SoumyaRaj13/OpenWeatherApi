package WeatherAppApplication.DTO;



public class WeatherDTO {
	
	
	private double temperature;
    private String condition;
    private String location;
    private double precipitation;
    private int humidity;
    private double windSpeed;

    public WeatherDTO() {}
    public WeatherDTO(double temperature, String condition, String location,
                      double precipitation, int humidity, double windSpeed) {
        this.temperature = temperature;
        this.condition = condition;
        this.location = location;
        this.precipitation = precipitation;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        
        
    }
    // getters/setters
    public double getTemperature(){ return temperature; }
    public void setTemperature(double t){ this.temperature=t; }
    public String getCondition(){ return condition; }
    public void setCondition(String c){ this.condition=c; }
    public String getLocation(){ return location; }
    public void setLocation(String l){ this.location=l; }
    public double getPrecipitation(){ return precipitation; }
    public void setPrecipitation(double p){ this.precipitation=p; }
    public int getHumidity(){ return humidity; }
    public void setHumidity(int h){ this.humidity=h; }
    public double getWindSpeed(){ return windSpeed; }
    public void setWindSpeed(double w){ this.windSpeed=w; }

	
	
	
	
	
	
	

}

