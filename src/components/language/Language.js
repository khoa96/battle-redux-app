import React, { Component } from 'react'

export default class Language extends Component {

    onSelectLanguage(language) {
        this.props.onSelectLanguage(language)
    }
    
    render() {
        const { language, language_select } = this.props;
        return (
            <React.Fragment>
                <li 
                    className={language === language_select ? "language-select" : ""}
                    onClick={() => {this.onSelectLanguage(language)}}
                >
                    {language}
                </li>
            </React.Fragment>
        )
    }
}
