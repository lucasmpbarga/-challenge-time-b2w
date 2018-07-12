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
            <div className="">
                <div class="card e-card" >
                    <img class="header-logo logo" src={require('./drive/images/header_sw.png')} />       
                
                    <div class="card-body ">
                    {
                        this.state.getData.map((data, index) => {
                            if(index == this.state.questNumber){
                                return(
                                    <div className="infos">
                                        <h2 className="center-name">{data.name}</h2>
                                        <div className="">
                                            <h5>Population: {data.population}</h5>
                                            <h5>Climate: {data.climate}</h5>
                                            <h5>Terrain: {data.terrain}</h5>
                                        </div>
                                        <h6 className="center-name f-films">Featured in {data.films.length} Films</h6>
                                        <div className="d-btn-next">
                                            <button type="button" class="btn btn-success btn-next" onClick={() => this.randomQuest()}>NEXT</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }    
                    </div>
                </div>
          </div>
        );
    }
}
export default App;