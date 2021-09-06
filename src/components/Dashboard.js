import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Dashboard extends Component {
    render() { 
        return (
            <div>
                <h3 className='center'>Time Line</h3>
                <ul className='dashboard-list'>
                    {
                        
                        this.props.tweetIds.map( id => (
                            <li key={id}>{id}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ tweets }) => {
    return {
        tweetIds: Object.keys(tweets).sort( (a,b) => tweets[a].timestamp - tweets[b].timestamp )
    }
}


export default connect(mapStateToProps)(Dashboard);