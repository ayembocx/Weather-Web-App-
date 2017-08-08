$(document).ready(main);
function main(){
   //var API_KEY = 'c6d94bd43f2537af96706089e35fa12c';
  var loc;
  var currentLocation;
  var currentWeather;
  var country;
  var temp;
  var temp2;
  var imageLink;
  var celsius = 'F';
  var subtemp;
  
  
  $.getJSON('https://ipinfo.io', function(d){
  loc = d.loc.split(',');
    console.log(loc);
  console.log('the locations are: '+ loc[0] + ' and: '+ loc[1]);
   
     $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + loc[0] + '&lon='+ loc[1], function(data){
       var run=1;
      console.log('the data is: ',data);
      currentLocation = data.name;
      country = data.sys.country;
      currentWeather = data.weather[0].description;
      temp = data.main.temp_min;
      temp2 = temp =  Math.round((temp * (1.8) + 32));
         
      
   
       
     
       $('.weather-text-location').text(currentLocation);
       $('.weather-text-weather').text(currentWeather);
       $('.weather-text-temperature').text(temp + ' °'+celsius );
      imageLink = data.weather[0].main ;
       
       function toFahr() {
         
         temp =  Math.round((temp * (1.8) + 32));
         celsius = 'F';
         $('.weather-text-temperature').text(temp + ' °'+celsius );
         
       }
    
       function toCels() {
         temp =  Math.round(((temp-32)/1.8));
         celsius = 'C';
         $('.weather-text-temperature').text(temp + ' °'+celsius );
       }
       
       
       $('.weather-text-temperature').text(temp2+' °'+celsius).on('click',function () {
         
    if(celsius==='C'){
          toFahr();
        } else {
          toCels();
        }
         
       });
     
    
     
       
       function display() {
         
         switch(true){
           case currentWeather.indexOf('rain')!==-1 : 
             $('#rain').fadeIn(700);
             break;
             
           case currentWeather.indexOf('few clouds')!==-1 : 
             $('#sun-cloud').fadeIn(700);
             break;
             
             case currentWeather.indexOf('scattered clouds')!==-1 : 
             $('#sun-cloud').fadeIn(700);
             break;
             
             case currentWeather.indexOf('broken clouds')!==-1 : 
             $('#sun-cloud').fadeIn(700);
             break;
             case currentWeather.indexOf('clouds')!==-1 : 
             $('#cloudy').fadeIn(700);
             break;
           
             
             
           case currentWeather.indexOf('thunderstorm')!==-1:
             $('#thunderstorm').fadeIn(700);
             break;
             
           case currentWeather.indexOf('clear')!==-1: 
             $('#sunny').fadeIn(700);
             break;
             
           case currentWeather.indexOf('drizzle')!==-1:
             $('#drizzle').fadeIn(700);
             break;
             
           default : 
             $('.icon').hide();
             break;
             
                              }
             
       }
        
       
      display();
      
    
       
    });
 
  });
    //getWeather 
    
   
    
    
    
  
  
  
}