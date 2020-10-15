import React, { Component } from 'react'

export default class Clock extends Component {
      constructor(props){
             super(props)

              this.state = {
                     time: new Date()
                            .toLocaleDateString('en-US', {
                                   hour: 'numeric',
                                   minute: 'numeric',
                                   second: 'numeric',
                                   hour12: true
                     }),
                     valor: 0
              }
       }

       //quando o component é montados
       componentDidMount(){
            this.timer = setInterval(() =>{ this.updateClock()  }, 1000)
       }

       componentWillMount(){
            clearInterval(this.timer);
       }


       updateClock () {
           //faz a atualização do estado   
           this.setState({
              time: new Date()
                 .toLocaleDateString('en-US', {
                     hour: 'numeric',
                     minute: 'numeric',
                     second: 'numeric',
                     hour12: true
                 })
           });
       }


       handleClick(){
       //       this.setState({
       //              valor: 5
       //       }) 

       
       }

       render(){
             const { time } = this.state;
          
              return(
                     <div>
                            <h1>{time}</h1>

                            <button type="submit" onClick={this.handleClick()}>Contar</button>
                            <p>{}</p>
                     </div>
              )
       }
}

// export default Hello;
