import React from 'react'
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';
import '../stylesheets/Slide.css';


class Slide extends React.Component {
    constructor(props) {
    super(props);
    }

    render() {
        return (
                <iframe className="iframe3" width='100%' height='750'
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQeDd-DlowUw-OjN2YEpLpULv1xBvFlyDbP7BazKA0jHl8OartFdacITRsBYa9pEPbogDa3cRltt64X/embed?start=false&loop=false&delayms=3000&slide=id.g123c42ac328_0_45"
                        allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
                </iframe>
        )
    }
}

export default Slide;