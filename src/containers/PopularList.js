import React, { Component } from 'react'
import Loading from '../components/loading/Loading';
import PopularItem from '../components/popular/PopularItem';

import { connect } from 'react-redux'
import { getPopularList } from '../api//PopularAPI';

class PopularList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            populars: [],
            isLoading: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.popular.language_select !== this.props.popular.language_select) {
            this.setState({
                isLoading: true
            })

            getPopularList(nextProps.popular.language_select).then(response => {
                const populars = response.items;
                if (populars.length > 0) {
                    this.setState({
                        populars: populars,
                        isLoading: false
                    })
                }
            })
        }
    }

    componentDidMount = () => {
        this.setState({
            isLoading: true
        })

        getPopularList('all').then(response => {
            const populars = response.items;
            if (populars.length > 0) {
                this.setState({
                    populars: populars,
                    isLoading: false
                })
            }
        })
    }

    render() {
        const { isLoading, populars } = this.state;
        return (
            <React.Fragment>
                {isLoading ? <Loading /> : ""}
                <ul className="popular-list">
                    {
                        populars.map((popular, index) => {
                            return (
                                <PopularItem
                                    key={popular.id}
                                    index={index + 1}
                                    popular={popular}
                                />
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popularReducer
    }
}
export default connect(mapStateToProps)(PopularList)