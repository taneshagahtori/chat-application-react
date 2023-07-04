import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App =() => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="9a7aeb79-5699-47f1-a53c-40f8034bef09"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};
export default App;