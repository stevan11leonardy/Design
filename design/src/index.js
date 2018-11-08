import React from 'react';
import ReactDOM from 'react-dom';
import ImgMediaCard from './design';

class Render extends React.Component {
    render(){
        return(
            <div>
                <ImgMediaCard/>
            </div>
        )
    }
}
ReactDOM.render(<Render/>, document.getElementById('root'));
