import React, { Component } from 'react'
import LastMessage from './../ui/messagelist/LastMessage'
import OldMessagesList from './../ui/messagelist/OldMessagesList'
import CurrentPrice from './../ui/messagelist/CurrentPrice'
import { connect } from 'react-redux'
import {addMessage} from './../ui/messagelist/MessageListActions'


class AllMessagesScreen extends Component {
    render() {
        return(
            <main className="container">
                <div>
                    <LastMessage lastMessage={this.props.lastMessage}/>
                    <CurrentPrice currentPrice={this.props.price} />
                    <OldMessagesList messageList={this.props.messageList}/>
                </div>
            </main>
        )
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        lastMessage: state.message.lastMessage,
        price: state.message.price,
        messageList:state.message.messages|| [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (name) => {
            event.preventDefault();
            dispatch(addMessage(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllMessagesScreen);
