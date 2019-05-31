import React from 'react';

export default class Symbol extends React.PureComponent {

    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.props.onClick({
            name: this.props.name,
            url: this.props.url
        })
    }

    render(){

        const isActive = this.props.name === this.props.activeStyleName ? true : false;
        const borderColor = isActive ? '#56a5d8' : 'rgba(0,0,0,0)'

        const style = {
            height: '30px',
            width: '30px',
            border: `2px solid ${borderColor}`
        }
        
        return(
            <div className={`inline-block`} onClick={this.onClickHandler} style={style}>
                <img src={this.props.url}></img>
            </div>
        );
    }
}