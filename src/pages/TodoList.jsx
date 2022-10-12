import React from 'react';
import Form from '../components/Form'
import Header from '../components/Header'
import List from '../components/List'
import Layout from '../components/Layout'



function TodoList() {


  return (<div>
            <Layout>
              <Header/>
              <Form />
              <List/>
            </Layout>
          </div>);
}



export default TodoList;
