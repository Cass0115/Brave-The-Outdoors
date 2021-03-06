import React from 'react';

// import { ReactComponent as BrokenCloudsWhite }  from './images/BrokenCloudsWhite.svg';
// import { ReactComponent as FewCloudsWhite }  from './images/FewCloudsWhite.svg';
// import { ReactComponent as RainWhite }  from './images/RainWhite.svg';
// import { ReactComponent as ScatteredCloudsWhite }  from './images/ScatteredCloudsWhite.svg';
// import { ReactComponent as ShowerRainWhite }  from './images/ShowerRainWhite.svg';
// import { ReactComponent as ThunderstormsWhite }  from './images/ThunderstormsWhite.svg';



import { ReactComponent as BrokenCloudsDark }  from '../images/BrokenCloudsDark.svg';
import { ReactComponent as ClearSkyDark }  from '../images/ClearSkyDark.svg';
import { ReactComponent as FewCloudsDark }  from '../images/FewCloudsDark.svg';
// eslint-disable-next-line
import { ReactComponent as RainDark }  from '../images/RainDark.svg';
// eslint-disable-next-line
import { ReactComponent as ScatteredCloudsDark }  from '../images/ScatteredCloudsDark.svg';
// eslint-disable-next-line
import { ReactComponent as ShowerRainDark }  from '../images/ShowerRainDark.svg';
// eslint-disable-next-line
import { ReactComponent as SnowDark }  from '../images/SnowDark.svg';
import { ReactComponent as ThunderStormsDark }  from '../images/ThunderstormsDark.svg';



class Weather extends React.Component {
    render() {
        const isClearSky = this.props.cloud;
        const isClearSky1 = this.props.cloud1;
        const isClearSky2 = this.props.cloud2;
        const isClearSky3 = this.props.cloud3;
        console.log(isClearSky);
        console.log(isClearSky1);
        console.log(isClearSky2);
        console.log(isClearSky3);
        
        return (
            <div className="weather__wrapper weather">

                <div className="content__block">
                    <div className="city__name">
                        <p>Los Angeles</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature && <p> {this.props.temperature} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                    {(() => {
                        if(isClearSky > 0 && isClearSky < 30){
                            return (
                                <div><ClearSkyDark /></div>
                            ) 
                            } else if(isClearSky > 31 && isClearSky < 59){
                                return(
                                    <div><FewCloudsDark /></div>
                                )
                            } else if(isClearSky > 60 && isClearSky < 100){
                                return(
                                    <div><BrokenCloudsDark /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsDark /></div>
                                )
                            }
                        
                    })()}
                            
                    </div>
                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum && <span> {this.props.minimum} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum && <span> {this.props.maximum} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud && <span> {this.props.cloud}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity && <span> {this.props.humidity}%</span>}
                        </p>
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>New York</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature1 && <p> {this.props.temperature1} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                    {(() => {
                        if(isClearSky1 > 0 && isClearSky1 < 30){
                            return (
                                <div><ClearSkyDark /></div>
                            ) 
                            } else if(isClearSky1 > 31 && isClearSky1 < 59){
                                return(
                                    <div><FewCloudsDark /></div>
                                )
                            } else if(isClearSky1 > 60 && isClearSky1 < 100){
                                return(
                                    <div><BrokenCloudsDark /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsDark /></div>
                                )
                            }
                        
                    })()}
                    </div>
                    

                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum1 && <span> {this.props.minimum1} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum1 && <span> {this.props.maximum1} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud1 && <span> {this.props.cloud1}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity1 && <span> {this.props.humidity1}%</span>}
                        </p>
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>London</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature2 && <p> {this.props.temperature2} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        {(() => {
                        if(isClearSky2 > 0 && isClearSky2 < 30){
                            return (
                                <div><ClearSkyDark /></div>
                            ) 
                            } else if(isClearSky2 > 31 && isClearSky2 < 59){
                                return(
                                    <div><FewCloudsDark /></div>
                                )
                            } else if(isClearSky2 > 60 && isClearSky2 < 100){
                                return(
                                    <div><BrokenCloudsDark /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsDark /></div>
                                )
                            }
                        
                    })()}
                        
                    </div>
                    
                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum2 && <span> {this.props.minimum2} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum2 && <span> {this.props.maximum2} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud2 && <span> {this.props.cloud2}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity2 && <span> {this.props.humidity2}%</span>}
                        </p>
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>Tokyo</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature3 && <p> {this.props.temperature3} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        {(() => {
                        if(isClearSky3 > 0 && isClearSky3 < 30){
                            return (
                                <div><ClearSkyDark /></div>
                            ) 
                            } else if(isClearSky3 > 31 && isClearSky3 < 59){
                                return(
                                    <div><FewCloudsDark /></div>
                                )
                            } else if(isClearSky3 > 60 && isClearSky3 < 100){
                                return(
                                    <div><BrokenCloudsDark /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsDark /></div>
                                )
                            }
                        
                    })()}
                    </div>
                    
                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum3 && <span> {this.props.minimum3} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum3 && <span> {this.props.maximum3} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud3 && <span> {this.props.cloud3}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity3 && <span> {this.props.humidity3}%</span>}
                        </p>
                    </div>
                    

                </div>
            </div>

        )
    }
}

export default Weather;