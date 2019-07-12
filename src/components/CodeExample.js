import React from 'react';

import CodeSnippet from './CodeSnippet';

export default class CodeExample extends React.PureComponent {

    constructor(props){
        super(props);
    }

    onClickHandler(){
        this.props.onClick({
            name: this.props.name,
            url: this.props.url
        })
    }

    render(){

        const symbolAsUrl = `// firefly symbol as image file
var symbol = {
    type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
    url: 'https://static.arcgis.com/images/Symbols/Firefly/${this.props.activeStyleName}.png', 
    width: '${this.props.symbolSize + 'px'}',
    height: '${this.props.symbolSize + 'px'}'
};`;

        const symbolAsDataUri = `// firefly symbol as Data URI
var symbol = {
    type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
    url: '${this.props.activeStyleUrl}',
    width: '${this.props.symbolSize + 'px'}',
    height: '${this.props.symbolSize + 'px'}'
};`;

        return (
            <div style={{position: 'relative'}}>
                <CodeSnippet 
                    key={'CodeSnippet-0'}
                    code={symbolAsDataUri}
                />
                <CodeSnippet 
                    key={'CodeSnippet-1'}
                    code={symbolAsUrl}
                />
            </div>
        )
    }
}