import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const staticData = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1613896955,
    localtime: '2021-02-21 8:42',
  },
  current: {
    last_updated_epoch: 1613896210,
    last_updated: '2021-02-21 08:30',
    temp_c: 11,
    temp_f: 51.8,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      code: 1003,
    },
    wind_mph: 3.8,
    wind_kph: 6.1,
    wind_degree: 220,
    wind_dir: 'SW',
    pressure_mb: 1009,
    pressure_in: 30.3,
    precip_mm: 0.1,
    precip_in: 0,
    humidity: 82,
    cloud: 75,
    feelslike_c: 9.5,
    feelslike_f: 49.2,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 10.5,
    gust_kph: 16.9,
    air_quality: {
      co: 230.3,
      no2: 13.5,
      o3: 54.3,
      so2: 7.9,
      pm2_5: 8.6,
      pm10: 11.3,
      'us-epa-index': 1,
      'gb-defra-index': 1,
    },
  },
};

const DetailedScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    //var hours = new Date().getHours(); //Current Hours
    //var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(date + '-' + month + '-' + year);
    method();
  }, []);
  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
      {/* <Text style={{fontSize: 18, color: '#000'}}>
        Back Button Detailed Screen Header Style Block
      </Text> */}
      <View style={{padding: 20}}>
        <View
          style={{
            marginVertical: 40,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('./src/assets/images/weather/day/119.png')}
              style={{height: 50, width: 50}}
            />
            <Text style={{color: '#000', fontSize: 12}}>
              {staticData.current.condition.text}
            </Text>
          </View>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: '#000'}}>
            {staticData.current.temp_f}°
          </Text>
          <Text style={{fontSize: 25, color: '#000'}}>f</Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
          }}>
          {currentDate}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          Other Parameters
        </Text>
        <Text style={{color: '#000', fontSize: 16, marginBottom: 10}}>
          Humidity: {staticData.current.humidity}
        </Text>
        <Text style={{color: '#000', fontSize: 16, marginBottom: 10}}>
          Cloud: {staticData.current.cloud}
        </Text>
        <Text style={{color: '#000', fontSize: 16, marginBottom: 10}}>
          UV: {staticData.current.uv}
        </Text>
      </View>
    </View>
  );
};

export default DetailedScreen;
