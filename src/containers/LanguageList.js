import React, { Component } from 'react'
import languages from '../languages';
import Language from '../components/language/Language';
import { connect } from 'react-redux';
import { selectLanguage } from '../actions/index';

class LanguageList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.onSelectLanguage = this.onSelectLanguage.bind(this);
    }

    onSelectLanguage(language) {
        this.props.selectLanguage(language);
    }

    render() {
        const { language_select } = this.props.popular;
        return (
            <ul className="languages">
                {
                    languages.map((language, index) => {
                        return (
                            <Language
                                key={index}
                                language={language}
                                language_select={language_select}
                                onSelectLanguage={this.onSelectLanguage}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popularReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectLanguage: (language) => dispatch(selectLanguage(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageList)
