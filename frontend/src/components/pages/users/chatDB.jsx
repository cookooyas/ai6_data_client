import React, { useState } from "react";
import * as API from '../../../utils/api'

async function chatDB() {
    const [chatList, setChatList] = useState([])

    try {
        const res = await API.get('/api/users/:userId')
        setChatList(res.data)
    } catch(err) {
        alert('error')
    }

    const chatingList = ({chat}) => {

        return (
            <tr key={chat.date}>
                <td>{chat.date}</td>
                <td>{chat.time}</td>
            </tr>
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                    {chatList.map((chat) => {
                        return <chatingList chat={chat} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default chatDB