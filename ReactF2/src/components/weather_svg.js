import React from "react";

import thunderStormRain from '../img/svg/thunderstorms-rain.svg';
import thunderStormRainDay from '../img/svg/thunderstorms-day-rain.svg';
import thunderStormRainNight from '../img/svg/thunderstorms-night-rain.svg';
import thunderStormDay from '../img/svg/thunderstorms-day.svg';
import thunderStormNight from '../img/svg/thunderstorms-night.svg';
import thunderStorm from '../img/svg/thunderstorms.svg';
import drizzle from '../img/svg/drizzle.svg';
import drizzleDay from '../img/svg/partly-cloudy-day-drizzle.svg';
import drizzleNight from '../img/svg/partly-cloudy-night-drizzle.svg';
import rain from '../img/svg/rain.svg';
import rainDay from '../img/svg/partly-cloudy-day-rain.svg';
import rainNight from '../img/svg/partly-cloudy-night-rain.svg';
import sleet from '../img/svg/sleet.svg';
import sleetDay from '../img/svg/partly-cloudy-day-sleet.svg';
import sleetNight from '../img/svg/partly-cloudy-night-sleet.svg';
import snow from '../img/svg/snow.svg';
import snowDay from '../img/svg/partly-cloudy-day-snow.svg';
import snowNight from '../img/svg/partly-cloudy-night-snow.svg';
import smoke from '../img/svg/smoke.svg';
import mist from '../img/svg/mist.svg';
import haze from '../img/svg/haze.svg';
import dust from '../img/svg/dust.svg';
import fog from '../img/svg/fog.svg';
import dustWind from '../img/svg/dust-wind.svg';
import tornado from '../img/svg/tornado.svg';
import wind from '../img/svg/wind.svg';
import clearDay from '../img/svg/clear-day.svg';
import partlyCloudyDay from '../img/svg/partly-cloudy-day.svg';
import overcastDay from '../img/svg/overcast-day.svg';
import clearNight from '../img/svg/clear-night.svg';
import partlyCloudyNight from '../img/svg/partly-cloudy-night.svg';
import overcastNight from '../img/svg/overcast-night.svg';
import cloudy from '../img/svg/cloudy.svg';


function WeatherSvg(props) {
    let iconStoreDay = {
        '200': thunderStormRainDay, '201': thunderStormRain, '202': thunderStormRain, '210': thunderStormDay, '211': thunderStormDay, '212': thunderStorm, '221': thunderStorm, '230': thunderStormRain, '231': thunderStormRain, '232': thunderStormRain,
        '300': drizzleDay, '301': drizzle, '302': drizzle, '310': drizzleDay, '311': drizzle, '312': drizzle, '313': drizzle, '314': drizzle, '321': drizzle,
        '500': rainDay, '501': rainDay, '502': rain, '503': rain, '504': rain, '511': rain, '520': rain, '521': rain, '522': rain, '531': rain,
        '600': snowDay, '601': snow, '602': snow, '611': sleet, '612': sleetDay, '613': sleet, '615': sleet, '616': sleet, '620': snow, '621': snow, '622': snow,
        '701': mist, '711': smoke, '721': haze, '731': dustWind, '741': fog, '751': dust, '761': dustWind, '762': smoke, '771': wind, '781': tornado,
        '800': clearDay, '801': partlyCloudyDay, '802': overcastDay, '803': cloudy, '804': cloudy,
    }
    let iconStoreNight = {
        '200': thunderStormRainNight, '201': thunderStormRain, '202': thunderStormRain, '210': thunderStormNight, '211': thunderStormNight, '212': thunderStorm, '221': thunderStorm, '230': thunderStormRain, '231': thunderStormRain, '232': thunderStormRain,
        '300': drizzleNight, '301': drizzle, '302': drizzle, '310': drizzleNight, '311': drizzle, '312': drizzle, '313': drizzle, '314': drizzle, '321': drizzle,
        '500': rainNight, '501': rainNight, '502': rain, '503': rain, '504': rain, '511': rain, '520': rain, '521': rain, '522': rain, '531': rain,
        '600': snowNight, '601': snow, '602': snow, '611': sleet, '612': sleetNight, '613': sleet, '615': sleet, '616': sleet, '620': snow, '621': snow, '622': snow,
        '701': mist, '711': smoke, '721': haze, '731': dustWind, '741': fog, '751': dust, '761': dustWind, '762': smoke, '771': wind, '781': tornado,
        '800': clearNight, '801': partlyCloudyNight, '802': overcastNight, '803': cloudy, '804': cloudy,
    }
    let forecastTime = props.hour
    let icon_svg = iconStoreDay[props.iconId]
    if ((forecastTime) > 6 && forecastTime < 19) {
        icon_svg = iconStoreDay[props.iconId]
    } else {
        icon_svg = iconStoreNight[props.iconId]
    }
    
    return (
        <img src={icon_svg} alt="icon_svg" />
    )
}

export default WeatherSvg;