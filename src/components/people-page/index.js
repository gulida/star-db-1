import React, {Component} from "react";
import "./people-page.css"
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services";

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        debugger;
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = ( id ) => {
        this.setState( {
            selectedPerson: id
        })
    }

    render() {

        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({name, gender, birthYear}) => (
                            `${name} (${gender}, ${birthYear})`
                        )}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}