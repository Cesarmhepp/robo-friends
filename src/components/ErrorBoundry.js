import React, {Component} from 'react';

class ErrorBoundry extends Component{
     constructor(props){
         super(props);
         this.state = {
            hasError:false
         }
     }

     componentDidCatch(error, info){
        this.setstate({hasError:true});
     }



     render(){
         if(this.state.hasError){
             return <h1>Oppps. Something happened!</h1>
         }
         
         return this.props.children
         
     }
}

export default ErrorBoundry;