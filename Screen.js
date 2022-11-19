/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {parse} from 'himalaya';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

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

const data = [
  {label: 'Landon, United Kingdom', value: '1'},
  // {label: 'Hyderabad,Telangana', value: '2'},
  // {label: 'Other', value: '3'},
];

const Screen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');
  const [signUp, setSignUp] = useState({
    current: '',
    location: '',
  });

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
  const isDarkMode = useColorScheme() === 'dark';

  method = async () => {
    res = await fetch('https://www.weatherapi.com/');

    if (res.status == 200) {
      console.log(res, 'success');
      console.log(JSON.parse(JSON.stringify(res)), 'success');
    } else {
      console.log('Error');
    }
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        {/* <View
          style={{
            backgroundColor: '#000',
            height: 60,
            width: '100%',
            justifyContent: 'center',
            // display: 'flex',
            // flexDirection: 'row',
          }}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
            Hyderabad, Telangana{' '}
          </Text> 
        </View> */}
        <View style={{padding: 20, paddingTop: 10}}>
          <View style={styles.dropdownContainer}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={170}
              labelField="label"
              valueField="value"
              placeholder="Select City"
              value={signUp.location}
              onChange={item => {
                setSignUp({...signUp, location: item.value});
              }}
            />
          </View>
          {/* <View
           style={{
             backgroundColor: '#daa520',
             height: 170,
             width: '100%',
             paddingTop: 10,
             paddingLeft: 20,
           }}>
           <Text style={{color: '#fff', fontSize: 16}}>CURRENT WEATHER</Text>
           <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
             <Icon name="bell" color="#fff" size={26} />
             <Text style={{color: '#fff', fontSize: 70}}>27</Text>
             <Text style={{color: '#fff', fontSize: 20}}>Partly cloudy</Text>
           </View>
           <Text style={styles.textStyle}>{currentDate}</Text>
         </View> */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 20,
            }}>
            Recent Search Results
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailedScreen')}
            activeOpacity={0.6}
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 18, color: '#fff'}}>
              {staticData.location.name}, {staticData.location.country}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./src/assets/images/weather/day/119.png')}
                style={{height: 20, width: 20}}
              />
              <Text style={{fontSize: 24, color: '#fff'}}>
                {staticData.current.temp_f}°
              </Text>
              <Text style={{fontSize: 18, color: '#eee'}}>f</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: 'white',
    padding: 2,
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: '#000',
    borderWidth: 0.7,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Screen;
