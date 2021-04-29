import React, {useEffect, useState} from 'react';
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {DonutLarge, MoreVert} from "@material-ui/icons";
function Chat(props) {
    const [seed, setSeed] = useState('');
    useEffect(()=>{
        setSeed(Math.floor((Math.random()*5000)))
    },[]);
    return (

        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <DonutLarge />

                    </IconButton>
                    <IconButton>
                        <Chat />

                    </IconButton>
                    <IconButton>
                        <MoreVert />

                    </IconButton>
                </div>

            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>

        </div>
    );
}

export default Chat;