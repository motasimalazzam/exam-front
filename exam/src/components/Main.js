import axios from 'axios'
import React, { Component } from 'react';
import Digimon from './Digimon'

class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            serverLinke:process.env.REAC_APP_SERVER,
            digimons:[],
            showdigimon:false,
        }
    }

    componentDidMount = async()=>{
        const digimons=await axios.get(`http://localhost:3005/digimons`);
        console.log('kkk',digimons.data)
        this.setState({
            digimons:digimons.data,
            showdigimon:true,
        })

    };

    addToFavorite = async(digimonData)=>{
        await axios.post(`http://localhost:3005/addToFav`,digimonData)
    }
    render() {
        return (
            <div>
                {this.state.showdigimon &&
                this.state.digimons.map((digimon,idx)=>{
                    return(
                        <Digimon
                        digimon={digimon}
                        idx={idx}
                        addToFavorite={this.addToFavorite}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Main
