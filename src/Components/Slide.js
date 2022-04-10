import React from 'react'
import '../stylesheets/Slide.css';
import { useLocation } from "react-router-dom";


const Slide = (props) => { 
            const location = useLocation();
            const mealInfo = location.state;
            var src = "https://docs.google.com/presentation/d/e/2PACX-1vQeDd-DlowUw-OjN2YEpLpULv1xBvFlyDbP7BazKA0jHl8OartFdacITRsBYa9pEPbogDa3cRltt64X/embed?start=false&loop=false&delayms=3000&";
            src += mealInfo.SlidesLink;
            console.log(mealInfo);
            console.log(src)
            return (
                    <iframe title={mealInfo.ID} className="iframe3" width='100%' height='700'
                        src={src}
                             mozallowfullscreen="true" webkitallowfullscreen="true">
                    </iframe>
            )
        }

export default Slide;