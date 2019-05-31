import './style.scss';
import React from 'react';

import Symbol from './Symbol';

export default class FireflySymbolList extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
        };
    }

    // regroupData(){
    //     const groupNames = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];
    //     const groups = [];

    //     this.props.data.forEach((d,i)=>{

    //         const groupIdx = parseInt(i / 20);
    //         const symbolIdx = +d.name.slice(8) - 1;

    //         if(!groups[groupIdx]){
    //             groups[groupIdx] = {
    //                 groupName: groupNames[groupIdx],
    //                 symbols: []
    //             };
    //         }

    //         groups[groupIdx].symbols[symbolIdx] = d;

    //     });

    //     return groups;
    // }

    getSymbolsByGroup(name='', symbols=[]){

        const symbolsList = symbols.map((d,i)=>{
            const name = d.name;
            const url = d.url;
            return (
                <Symbol
                    key={name}
                    name={name}
                    url={url}
                    activeStyleName={this.props.activeStyleName}
                    onClick={this.props.onClick}
                />
            )
        });

        return (
            <div className='symbols-group' key={`firefly-symbold-${name}`}>
                {/* <div className='symbol-title'>
                    <h6>{name}</h6>
                </div> */}
                <div className='symbol-list'>
                    {symbolsList}
                </div>
            </div>
        )
    }

    render(){

        const fireflySymbolsGroups = this.props.data.map((d,i)=>{
            return this.getSymbolsByGroup(d.groupName, d.symbols)
        });

        return(
            <div>
                {fireflySymbolsGroups}
            </div>
        );
    }
}