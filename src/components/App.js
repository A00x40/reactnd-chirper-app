import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { LoadingBar } from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'


class App extends Component {

    componentDidMount () {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                {
                    this.props.loading === true 
                    ? <LoadingBar /> 
                    : <TweetPage match={{params: {id: "2mb6re13q842wu8n106bhk"}}}/>
                }
            </div>
        )
    }
}

const mapStateToProps = ({authUser}) => {
    return {
        loading: authUser === null
    }
}

export default connect(mapStateToProps)(App)