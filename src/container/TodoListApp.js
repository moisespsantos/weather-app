import React, { Component } from 'react';
import TodoForm from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ContainerApp }  from '../components/ContainerApp';

import { Message, WelcomeMessage } from './../Message';
import { getTodos } from './../Api';

import axios from 'axios';

export default class TodoListApp extends Component {

       constructor(props){
              super(props);

              this.state = {
                     items: []
              }
       }


       pushToItems = (todo) => {
              const { items } = this.state;
              this.setState({
                     items: [...items, todo]
              })
       }

       removeFromItems = (index) => {
             const { items }  = this.state;
             //remove o item
             items.splice(index, 1);

             this.setState({
                    items
             })
             

       }

       // componentDidMount(){
       //        fetch('https://jsonplaceholder.typicode.com/todos')
       //        .then(response => response.json()) //faz o parse para json
       //        .then(data => console.log(data))
       // }

       //   componentDidMount(){
       //        fetch('https://jsonplaceholder.typicode.com/todos')
       //        .then(response => response.json()) //faz o parse para json, se necessário, muitas vezes ja vem em json
       //        .then(data => {
       //               this.setState({ items: data })
       //        })
       //   }


        async  componentDidMount(){
            //utilizando um arquivo externo
            const { data } = await getTodos();
            this.setState({ items: data })
        }


       



       render(){
              const { items } = this.state;
              return(
                     <ContainerApp>
                            <div id="app" className="container">
                                 {/* <Message title="Tdodo list property"/> */}

                                 <WelcomeMessage />
                                 
                                   <TodoForm pushToItems={this.pushToItems} />
                                   <TodoList items={items} removeFromItems={this.removeFromItems} />
                            </div>  
                     </ContainerApp>
                   
              );
       }

}