import React, {Component} from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';
import RandomPlanet from "../random planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";


export default class App extends Component{

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }



    componentDidCatch(error, errorInfo) {
        console.log("component did catch")
        this.setState({ hasError: true})
    }


    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null

        return (
            <div>
                <Header />
                {planet}
                <div>
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                    </button>

                    <ErrorButton />
                </div>

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />

            </div>
        );
    }


};

