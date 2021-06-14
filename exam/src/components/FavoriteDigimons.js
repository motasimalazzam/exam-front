import React, { Component } from 'react';
import axios from 'axios';
import Favdigimon from './Favdigimon';
import UpdateForm from './UpdateForm'


class FavoriteDigimons extends Component {

    constructor(props){
        super(props);
        this.state={
            serverLinke:process.env.REAC_APP_SERVER,
            digimons:[],
            showFav:false,
            index:0,
            showForm:false,
            digimonName:'',
            digimonImage:'',
            digimonlevel:'',
        }
    }

    componentDidMount = async()=>{
        const digimons=await axios.get(`http://localhost:3005/getFavDigimons`);
        console.log('kkk',digimons.data)
        this.setState({
            digimons:digimons.data,
            showFav:true,
        })

    };

    deletDigimon = async(idx)=>{
        const id=this.state.digimons[idx]._id;
        const digimons=await axios.delete(`http://localhost:3005/deleteDigimons/${id}`);
        this.setState({
            digimons:digimons.data,
        })
    }

    updateForm = (idx)=>{
        const chosenDigimon=this.state.digimons[this.state.index]
        this.setState({
            showForm:true,
            index:idx,
            digimonName:chosenDigimon.name,
            digimonImage:chosenDigimon.img,
            digimonlevel:chosenDigimon.level,

        })
    };

    updateName=(e=>this.setState({digimonName:e.target.value}))
    updateImage=(e=>this.setState({digimonImage:e.target.value}))
    updateLevel=(e=>this.setState({digimonlevel:e.target.value}))

    updateFunc = async(e)=>{
        e.preventDefault();
        const id=this.state.digimons[this.state.index]._id
        const chosenData={
            digimonName:this.state.digimonName,
            digimonImage:this.state.digimonImage,
            digimonlevel:this.state.digimonlevel
        }
           let chosenDigimon=await axios.put(`http://localhost:3005/updateDigimons/${id}`,chosenData);
           this.setState({
            chosenDigimon:chosenDigimon.data
           })

        
    }


    render() {
        return (
            <div>

                {this.state.showForm &&
                <UpdateForm
                digimonName={this.state.digimonName}
                digimonImage={this.state.digimonImage}
                digimonlevel={this.state.digimonlevel}
                updateName={this.updateName}
                updateImage={this.updateImage}
                updateLevel={this.updateLevel}
                updateFunc={this.updateFunc}
                />
                }
                {this.state.showFav &&
                this.state.digimons.map((digimon,idx)=>{
                    return(
                        <Favdigimon
                        digimon={digimon}
                        idx={idx}
                        deletDigimon={this.deletDigimon}
                        updateForm={this.updateForm}/>
                    )
                })}
                
            </div>
        )
    }
}

export default FavoriteDigimons
