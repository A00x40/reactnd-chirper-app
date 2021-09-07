import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import TweetPage from './TweetPage'
import NewTweet from './NewTweet'
import Nav from './Nav'

class App extends Component {

    componentDidMount () {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar /> 
                    <div className='container'>
                    <Nav />
                    {
                        this.props.loading === true 
                        ? null
                        : 
                        <div>
                            <Route exact path='/' component={Dashboard} />
                            <Route path='/tweet/:id' component={TweetPage} />
                            <Route exact path='/new' component={NewTweet} />
                        </div> 
                    }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = ({authUser}) => {
    return {
        loading: authUser === null
    }
}

export default connect(mapStateToProps)(App)