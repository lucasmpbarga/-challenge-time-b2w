import React from 'react';
import './app.css';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
	    super(props);
	    this.state = {	  
            getData: [],
            questNumber: Math.floor(Math.random() * 60)
        }
    }

	componentDidMount = () =>{
        
        for(var i=0; i<=7; i++){
            const that = this;
            var apiURL = "https://swapi.co/api/planets/?page="+i;
            axios.get(apiURL).then(function(response) {
                let r = response.data.results
                that.setState({
                    getData: that.state.getData.concat(r)                    
                })
            });
        }
        
    }

    randomQuest(){
        this.setState({
            questNumber: Math.floor(Math.random() * 60)
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="header">
                <img className="header-logo" src={require('./drive/images/header_sw.png')} />       
                </div>
                <div className="quests">
                    {
                        this.state.getData.map((data, index) => {
                            console.log(this.state)
                            if(index == this.state.questNumber){
                                return(
                                    <div className="">
                                        <h1>{data.name}</h1>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="d-btn-sw">
                        <button className="btn-sw" onClick={() => this.randomQuest()}>StarWarsApi</button>
                    </div>
                </div>
                
                
                
            </div>
        );
    }
}
export default App;