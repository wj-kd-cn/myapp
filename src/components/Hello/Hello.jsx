import React from 'react'
import './hello.css'


class hello extends React.Component{
    render(){
        console.log('@Hello',this);
        return(
            <div>
                <h2 >Hello React, Welcome To myApp !!!</h2>
                

            </div>
            

        )
    }
}

export default hello;
