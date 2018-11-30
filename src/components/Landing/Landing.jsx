import React from 'react';
import './Landing.css';
import back from '../../assets/images/back.png';
import black from '../../assets/images/vector.png';
import side from '../../assets/images/side-drop.png';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

class Landing extends React.Component {

    state = {
        loadingBack: true,
        loadingBlack: true,
    }

    componentDidMount() {
        this.props.toggleLanding();
    }

    componentWillUnmount() {
        this.props.toggleLanding();
    }

    render() {
        return (
            <>
                {this.state.loadingBack && this.state.loadingBlack ? <Loader message=" " /> : null}
                <div id="landing-page-container">
                    <div id="special-container">
                        <h1>Resources for Students</h1>
                        <p>Explore the ultimate collection</p>
                        <div><Link to="/home">Get Started</Link></div>
                    </div>
                    <img src={black} alt="" className="background-svg-2" onLoad={() => this.setState({ loadingBlack: false })} />
                    <img src={back} alt="" className="background-svg-1" onLoad={() => this.setState({ loadingBack: false })} />
                    <img src={side} alt="" className="background-svg-3" />
                    
                </div>
            </>
        );
    }
}

export default Landing;