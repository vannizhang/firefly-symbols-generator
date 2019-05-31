import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeSnippet extends React.PureComponent {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div style={{maxWidth: '680px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {this.props.code || ''}
                </SyntaxHighlighter>
            </div>
        );
    }
}