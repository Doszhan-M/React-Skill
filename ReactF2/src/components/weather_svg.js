import React from "react";

import thunderStormRain from '../img/svg/thunderstorms-rain.svg';
import thunderStorm from '../img/svg/thunderstorms.svg';
import drizzle from '../img/svg/drizzle.svg';
import rain from '../img/svg/rain.svg';
import sleet from '../img/svg/sleet.svg';
import snow from '../img/svg/snow.svg';
import smoke from '../img/svg/smoke.svg';
import mist from '../img/svg/mist.svg';
import haze from '../img/svg/haze.svg';
import dust from '../img/svg/dust.svg';
import fog from '../img/svg/fog.svg';
import dustWind from '../img/svg/dust-wind.svg';
import tornado from '../img/svg/tornado.svg';
import wind from '../img/svg/wind.svg';
import clearDay from '../img/svg/clear-day.svg';
import clearNight from '../img/svg/clear-night.svg';


function WeatherSvg(props) {
    let iconStoreDay = {
        '200': thunderStormRain, '201': thunderStormRain, '202': thunderStormRain, '210': thunderStorm, '211': thunderStorm, '212': thunderStorm, '221': thunderStorm, '230': thunderStormRain, '231': thunderStormRain, '232': thunderStormRain,
        '300': drizzle, '301': drizzle, '302': drizzle, '310': drizzle, '311': drizzle, '312': drizzle, '313': drizzle, '314': drizzle, '321': drizzle,
        '500': rain, '501': rain, '502': rain, '503': rain, '504': rain, '511': rain, '520': rain, '521': rain, '522': rain, '531': rain,
        '600': snow, '601': snow, '602': snow, '611': sleet, '612': sleet, '613': sleet, '615': sleet, '616': sleet, '620': snow, '621': snow, '622': snow,
        '701': mist, '711': smoke, '721': haze, '731': dustWind, '741': fog, '751': dust, '761': dustWind, '762': smoke, '771': wind, '781': tornado,
        '800': clearDay, '801': clearDay, '802': clearDay, '803': clearDay, '804': clearDay,
    }
    let iconStoreNight = {
        '200': thunderStormRain, '201': thunderStormRain, '202': thunderStormRain, '210': thunderStorm, '211': thunderStorm, '212': thunderStorm, '221': thunderStorm, '230': thunderStormRain, '231': thunderStormRain, '232': thunderStormRain,
        '300': drizzle, '301': drizzle, '302': drizzle, '310': drizzle, '311': drizzle, '312': drizzle, '313': drizzle, '314': drizzle, '321': drizzle,
        '500': rain, '501': rain, '502': rain, '503': rain, '504': rain, '511': rain, '520': rain, '521': rain, '522': rain, '531': rain,
        '600': snow, '601': snow, '602': snow, '611': sleet, '612': sleet, '613': sleet, '615': sleet, '616': sleet, '620': snow, '621': snow, '622': snow,
        '701': mist, '711': smoke, '721': haze, '731': dustWind, '741': fog, '751': dust, '761': dustWind, '762': smoke, '771': wind, '781': tornado,
        '800': clearNight, '801': clearNight, '802': clearDay, '803': clearDay, '804': clearDay,
    }
    let forecastTime = String(props.forecastTime)
    let icon_svg = iconStoreDay[props.iconId]

    if (forecastTime > 6 && forecastTime < 19) {
        icon_svg = iconStoreDay[props.iconId]
    } else {
        icon_svg = iconStoreNight[props.iconId]
    }
    return (
        <img src={icon_svg} alt="icon_svg" />
    )
}

export default WeatherSvg;