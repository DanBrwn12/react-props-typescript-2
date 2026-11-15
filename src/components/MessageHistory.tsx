interface AuthorName {
  name: string;
}

export interface DataMessage {
  id: string;
  from: AuthorName;
  type: 'response' | 'message' | 'typing';
  time: string;
  text?: string;
}

interface DataMessageProps {
  list?: DataMessage[];
}

function MessageType(type: string): string {
  switch (type) {
    case 'response':
      return 'message-response';

    case 'message':
      return 'message-own';

    case 'typing':
      return 'message-typing';

    default:
      return 'message-response';
  }
}

function MessageBubble(type: string, message = '') {
  if (type === 'response' || type === 'message') {
    return <div className="message-bubble">{message}</div>;
  } else if (type === 'typing') {
    return (
      <div className="typing-indicator">
        <span>печатает...</span>
      </div>
    );
  }
}

function MessageHistory({ list = [] }: DataMessageProps) {
  if (!list.length) {
    return null;
  } else {
    return (
      <div className="chat-history">
        {list.map((message) => (
          <div
            className={`message-item ${MessageType(message.type)}`}
            key={message.id}
          >
            <div className="message-header">
              <span className="message-author">{message.from.name}</span>
              <span className="message-time">{message.time}</span>
            </div>
            {MessageBubble(message.type, message.text)}
          </div>
        ))}
      </div>
    );
  }
}

export default MessageHistory;
