import MessageHistory from './components/MessageHistory';
import messages from './data/messages';
import './App.css';

function App() {
  return (
    <div className="chat-container">
      <MessageHistory list={messages} />
    </div>
  );
}

export default App;
