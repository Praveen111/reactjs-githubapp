import React from 'react';
import axios from 'axios';
import './User.css';

class User extends React.Component {

    constructor() {
        super();
        this.state = {
         str : 'abc',
         img : 'abc',
         name: ''
     };
    }

    componentWillMount(){
     
     axios.get('https://api.github.com/users/praveen111')
          .then((response) => {
           console.log('response:',response);
           this.setState({
               img : response.data.avatar_url,
               name: response.data.login
           })
            })
          .catch( (error) => {
                console.log(error);
            });
    }

    getUser() {
       // console.log("state:",this.state.str);
        axios.get(`https://api.github.com/users/${this.state.str}`)
             .then((resp) => {
                 console.log("Response",resp.data.avatar_url);
                 this.setState({
                     img: resp.data.avatar_url,
                     name: resp.data.login
                    
                 })
             })
             .catch(err=> {
                 console.log("Error", err);
             })
    }

  

    changeVal(e){
        
         this.setState({
             str : e.target.value
         })

         console.log("Change val", this.state.str);
    }

    render () {

     

        return(
            <div className="gUser">
                <label>Please enter github username :</label><input type="text" onChange={(event) => { this.changeVal(event)}} />
                <button onClick={this.getUser.bind(this)}>Search User</button>

                
                <img src={this.state.img} alt={this.state.name}/>
                    
            </div>
        )
    }
}

export default User;