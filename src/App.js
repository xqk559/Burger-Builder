import React from 'react';
import Layout from './Components/Layouts/Layout' ;
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder' ;
import classes from './Components/Layouts/Layout.css' ;

function App() {
  return (
    <div>
     <Layout>
       <BurgerBuilder />
     </Layout>
    </div>
  );
}

export default App;
