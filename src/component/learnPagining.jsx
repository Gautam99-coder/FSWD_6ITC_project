import React from "react";

const data =[
    "Text 1","Text 2","Text 3","Text 4","Text 5",
    "Text 6","Text 7","Text 8","Text 9","Text 10",
    "Text 11","Text 12","Text 13","Text 14","Text 15",
    "Text 16","Text 17","Text 18","Text 19","Text 20"
];

class learnPagining extends React.Component {
    constructor(props){
        super(props);
        this.state={
            page:1,
            data:data,
            size:5,
        };
    }

    next=()=>{
        this.setState({page:this.state.page+1});
    }

    prev=()=>{
        this.setState({page:this.state.page-1});
    }

    render(){

        const start=(this.state.page-1)*this.state.size;
        const end=start+this.state.size;
        const currrentItems=this.state.data.slice(start,end);

        return(
            <>
            <h2>Page {this.state.page}</h2>

            {currrentItems.map((item,index)=>(
                <p key={index}>{item}</p>
            ))}
            <button onClick={this.prev} disabled={this.state.page===1}>Previous</button>
            <button onClick={this.next} disabled={end>=this.state.data.length}>Next</button>
            </>
        )
    }
}

export default learnPagining;