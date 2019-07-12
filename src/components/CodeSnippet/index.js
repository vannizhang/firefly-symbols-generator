import './style.scss';
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as highlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copyTextToClipboard from '../../js/copy2clipboard';

export default class CodeSnippet extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            copyBtnLabel: 'copy'
        }

        this.copyBtnOnClick = this.copyBtnOnClick.bind(this);
    }

    copyBtnOnClick(){
        copyTextToClipboard(this.props.code);
        this.updateCopyBtnLabel();
    }

    updateCopyBtnLabel(){
        this.setState({
            copyBtnLabel: 'copied'
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    copyBtnLabel: 'copy'
                })
            }, 1500);
        });
    }

    render(){
        

        const copyBtnColor = this.state.copyBtnLabel === 'copy' ? 'text-light-gray' : 'text-white';
        const copyBtnFontSize = this.state.copyBtnLabel === 'copy' ? 'avenir-regular' : 'avenir-demi';

        const copyBtnModifierClasses = [copyBtnColor, copyBtnFontSize].join(' ');

        return(
            <div className='code-snippet-wrap' style={{position: 'relative'}}>
                <div className='code-copy-btn' onClick={this.copyBtnOnClick}>
                    <span className={`font-size--2 margin-right-half ${copyBtnModifierClasses}`}>{this.state.copyBtnLabel}</span>
                </div>
                <SyntaxHighlighter className='reset-code-style' language="javascript" style={highlighterStyle}>
                    {this.props.code || ''}
                </SyntaxHighlighter>
            </div>
        );
    }
}