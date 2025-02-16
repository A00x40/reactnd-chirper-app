import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewTweet from './NewTweet'
import Tweet from './Tweet'

class TweetPage extends Component {
    render() { 
        const { id, replies } = this.props

        return (
            <div>
                <Tweet id={id} />
                <NewTweet />
                <ul>
                    {
                        replies.map( id => (
                            <li key={id}>
                                <Tweet id={id} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({tweets} , props) => {
    const { id } = props.match.params
    return {
        id ,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort( (a,b) => tweets[b].timestamp - tweets[a].timestamp )
    }
}
 
export default connect(mapStateToProps)(TweetPage)