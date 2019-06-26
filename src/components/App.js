import React from 'react';

import Map from './Map';
import FireflySymbolList from './FireflySymbolsList';
import CodeExample from './CodeExample';

export default class App extends React.PureComponent {

    constructor(props){
        super(props);

        const initStyle = this.props.firsflySymbols[0].symbols[0];

        this.state = {
            activeStyleName: initStyle.name,
            activeStyleUrl: initStyle.url,
            symbolSize: 24
        };

        this.fireflySymbolOnClick = this.fireflySymbolOnClick.bind(this);
    }

    updateActiveStyleName(name=''){
        this.setState({
            activeStyleName: name
        });
    }

    updateActiveStyleUrl(url=''){
        this.setState({
            activeStyleUrl: url
        });
    }

    fireflySymbolOnClick(data=null){
        // console.log('fireflySymbolOnClick', data);
        if(data.name){
            this.updateActiveStyleName(data.name);
        }

        if(data.url){
            this.updateActiveStyleUrl(data.url);
        }
    }

    render(){
        const panelStyle = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            padding: '1rem',
            background: 'rgba(30,30,30,0.7)'
        };

        return(
            <div id='appContentDiv'>
                <Map 
                    symbolSize={this.state.symbolSize}
                    activeStyleUrl={this.state.activeStyleUrl}
                />

                <div style={panelStyle}>
                    
                    <FireflySymbolList 
                        data={this.props.firsflySymbols}
                        onClick={this.fireflySymbolOnClick}
                        activeStyleName={this.state.activeStyleName}
                    />

                    <CodeExample 
                        activeStyleUrl={this.state.activeStyleUrl}
                        activeStyleName={this.state.activeStyleName}
                        symbolSize={this.state.symbolSize}
                    />
                </div>

            </div>
        );
    }
}