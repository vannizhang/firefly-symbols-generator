import './style.scss';
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as highlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeSnippet extends React.PureComponent {

    constructor(props){
        super(props);
    }

    render(){

        console.log(highlighterStyle);

        return(
            <div style={{maxWidth: '680px'}}>
                <SyntaxHighlighter className='reset-code-style' language="javascript" style={highlighterStyle}>
                    {this.props.code || ''}
                </SyntaxHighlighter>
            </div>
        );
    }
}