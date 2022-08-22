import React from "react";
import HornedBeast from './HornedBeast';
// import h1 from './component/assest/h1.jpg';
// import hh2 from './component/assest/hh2.jpg';

class Main extends React.Component {
    render() {
        return(
            <div>
            <HornedBeast title ='h1' img ='https://barrelwisdom.com/media/games/sophie2/monsters/horned-beast.webp' disc='horend blue'></HornedBeast>
            <HornedBeast title ='h2' img ='https://d1rw89lz12ur5s.cloudfront.net/photo/bigncollectibles/file/684ea6e399c14082ba9977c011361174/IMG_20210623_205748.jpg' disc='horend red'></HornedBeast>
            </div>
            )
    }
}

export default Main;