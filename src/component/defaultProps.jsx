import React from 'react';

class DefaultProps extends React.Component{
    render(){
        const {text,onclick}=this.props;
        return(
            <>
            <button onClick={onclick}>{text}click Me</button>
            </>
        )
    }
}
DefaultProps.defaultProps={
    text:"Click Here",
    onclick:()=>console.log("Default onClick executed.")
};
export default DefaultProps;