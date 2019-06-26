import React from 'react';

import { loadCss, loadModules } from "esri-loader";
const esriLoaderOptions = {
    css: true
};

const config = {
    containerId: 'viewDiv',
    webmapId: '4c2895b0eb4b42399a1d6885410844fc',
};

export default class Map extends React.PureComponent {

    constructor(props){
        super(props);

        this.mapView = null;

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
      
            this.mapView = new MapView({
                container: config.containerId,
                map: webmap
            });

            this.mapView.when(()=>{
                this.updateRendererFortheDemoLayer();
            });
        });
    }

    updateRendererFortheDemoLayer(){
        const demoLayer = this.mapView.map.layers.getItemAt(0);
        // console.log(demoLayer);

        if(this.props.activeStyleUrl && demoLayer){

            const symbolSize = this.state.symbolSize ? this.state.symbolSize + 'px' : '24px';

            const symbol = {
                type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                url: this.props.activeStyleUrl,
                width: symbolSize,
                height: symbolSize
            };

            const renderer = {
                type: "simple",
                symbol
            };

            demoLayer.renderer = renderer;
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.activeStyleUrl !== prevProps.activeStyleUrl){
            this.updateRendererFortheDemoLayer();
        }
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