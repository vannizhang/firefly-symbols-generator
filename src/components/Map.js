import React from 'react';

import { loadCss, loadModules } from "esri-loader";
const esriLoaderOptions = {
    css: true
};

const config = {
    containerId: 'viewDiv',
    webmapId: '683e5e0b6dca49109d65f00e23014b88',
};

export default class Map extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {

        };
    }

    initMap(){
        loadModules(['esri/views/MapView', 'esri/WebMap'], esriLoaderOptions)
        .then(([MapView, WebMap])=>{

            const webmap = new WebMap({
                portalItem: {
                    id: config.webmapId
                }
            });
      
            const view = new MapView({
                container: config.containerId,
                map: webmap
            });
        });
    }

    componentDidMount(){
        this.initMap();
    }

    render(){
        return(
            <div id={config.containerId} style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 0,
                padding: 0
            }}></div>
        );
    }
}