import React, { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

const ChatEngine = dynamic(() => import('react-chat-engine').then((module) => module.ChatEngine));
const MessageFormSocial = dynamic(() => import('react-chat-engine').then((module) => module.MessageFormSocial));

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof document !== undefined) {
      setTimeout(() => {
        setLoaded(true)
      }, 100)
    }
  }, [])

  if (!loaded) return <div />

  return (
    <div style={{ padding: '100px', position: 'absolute', top: '0px', left: '0px', width: 'calc(100vw - 200px)', height: 'calc(100vh - 200px)', background: 'linear-gradient(150deg,#d9dbe2,#808aac 100%,#282d39 0)' }}>
      <ChatEngine 
        height='calc(100vh - 212px)'
        projectID='52147d0e-0f43-4ea7-916f-1820a16bf1d7'
        userName='Wendy'
        userSecret='pass1234'
        renderNewMessageForm={() => <MessageFormSocial />}
      />
    </div>
  )
}
  