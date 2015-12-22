function getWeatherByCity(lang, fnOK, fnError, cityName) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&APPID=26e2deaa722568f050ed48b9b8708e06&cnt=5&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
            fnOK.call(this, data);
        }
    );
}