import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import Search from './Search';
import Header from './Header';

export default function Weather({ weatherData, fetchWeatherData }) {

    const { weather,
            visibility,
            weather: [{description, icon}],
            name,
            main: { temp, humidity, feels_like },
            wind: { speed },
            sys: { sunrise, sunset },
    } = weatherData;
    const [{ main }] = weather;
    
    
    return (
        <SafeAreaView style={styles.container}>
            
            <StatusBar backgroundColor='darkgray' />
            <Header />
                <Search fetchWeatherData={fetchWeatherData} />
                <ScrollView>
                <View style={{alignItems: 'center' }}>
                    <Text style={styles.title}>{name}</Text>
                    
                </View>
                <View style={styles.current}>
                <Image
                        style={styles.largeIcon}
                        source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                        }}
                    />
                    <Text style={styles.currentTemp}>{Math.round(temp)}°C</Text>
                </View>
                <Text style={styles.currentDescription}>{description}</Text>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                    <Image 
                        source={require('../assets/temp1.png')}
                        style={styles.icons}
                        />
                        <Text style={styles.textDescription}>{Math.round(feels_like)}°C</Text>
                        <Text style={styles.textDescription}>Feels Like</Text>
                    </View>

                    <View style={styles.info}>
                    <Image 
                        source={require('../assets/drop.png')}
                        style={styles.icons}
                        />
                        <Text style={styles.textDescription}>{humidity}%</Text>
                        <Text style={styles.textDescription}>Humidity</Text>
                    </View>
                
                </View>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                    <Image 
                        source={require('../assets/visibility1.png')}
                        style={styles.icons}
                        />
                        <Text style={{ fontSize: 22, color: 'white', textAlign:'center' }}>{visibility}</Text>
                        <Text style={styles.textDescription}>Visibility</Text>
                    </View>

                    <View style={styles.info}>
                    <Image 
                        source={require('../assets/wind.png')}
                        style={styles.icons}
                        />
                        <Text style={styles.textDescription}>{speed} m/s</Text>
                        <Text style={styles.textDescription}>Wind Speed</Text>
                    </View>
                
                </View>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Image 
                        source={require('../assets/sunrise.png')}
                        style={styles.icons}
                        />
                        <Text style={styles.textDescription}>{new Date(sunrise*1000).toLocaleString()}</Text>
                        <Text style={styles.textDescription}>Sunrise</Text>
                    </View>

                    <View style={styles.info}>
                    <Image 
                        source={require('../assets/sunset1.png')}
                        style={styles.icons}
                        />
                        <Text style={styles.textDescription}>{new Date(sunset*1000).toLocaleString()}</Text>
                        <Text style={styles.textDescription}>Sunset</Text>
                    </View>
                
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8bcdff',
      
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(80, 99, 121, 0.5)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    largeIcon: {
        width: 250,
        height: 200,
      },
      current: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      },
      currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      currentDescription: {
        textAlign:'center',
        fontSize:24,
        textTransform: 'capitalize',
        fontWeight:'bold',
        marginBottom:10
      },
      title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#e96e50',
      },
      textDescription: {
        fontSize: 20, 
        color: '#04162a', 
        textAlign:'center',
      },
      icons: {
        width:40, 
        height:40, 
        borderRadius:40/2, 
        marginLeft:50
      }
});