import react from "react";

export default class Mudar extends React.Component{

    state={
        msg: "bem vindo"
    }

    componentDidMount(){
        setTimeout(() => {
            
        }, (5000));
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
            </div>
        )
    }
}