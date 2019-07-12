import React from 'react';

import Map from './Map';
import FireflySymbolList from './FireflySymbolsList';
import CodeExample from './CodeExample';

const config = {
    sidebar_width: 650
};

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
            background: 'rgba(30,30,30,0.8)',
            width: config.sidebar_width + 'px',
            boxSizing: 'border-box',
            overflowY: 'auto'
        };

        return(
            <div id='appContentDiv'>
                <Map 
                    symbolSize={this.state.symbolSize}
                    activeStyleUrl={this.state.activeStyleUrl}
                    paddingRight={config.sidebar_width}
                />

                <div style={panelStyle}>

                    <div className='trailer-1 text-light-gray'>
                        <h3 className=''>Firefly Symbols Generator</h3>
                        <p>Pick up and preview the <a className='link-light-blue' href='https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/mapping/whats-new-in-arcgis-online-firefly/' target='_blank'>Firefly Symbols</a> you like and start using it with ArcGIS JavaScript API as <a className='link-light-blue' href='https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html' target='_blank'>PictureMarkerSymbol</a>.</p>

                        <p className='font-size--2'>Here is a good <a className='link-light-blue' href='https://jsbin.com/muhugosoha/edit?html,output' target='_blank'>test app</a> with sample codes showcase how to use Firefly symbols with ArcGIS JS API.</p>
                    </div>

                    <hr className='leader-1 trailer-1' style={{borderTop: '1px solid rgba(255,255,255,0.25)'}}></hr>

                    <h5 className='avenir-light font-size-0 text-light-gray'>{this.state.activeStyleName}</h5>
                    
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