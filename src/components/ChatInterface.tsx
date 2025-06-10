import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
}

interface ChatInterfaceProps {
  onBack: () => void;
}

const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Добро пожаловать в анонимный чат поддержки. Здесь вы можете безопасно поделиться своими переживаниями.",
      timestamp: new Date(),
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Спасибо, что поделились. Мы понимаем, как это может быть сложно. Что вас больше всего беспокоит?",
        timestamp: new Date(),
        isUser: false,
      };
      setMessages((prev) => [...prev, supportMessage]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">Анонимный чат</h1>
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">Онлайн</span>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <Card
                className={`max-w-xs md:max-w-md p-4 ${
                  message.isUser
                    ? "bg-purple-600 text-white"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span
                  className={`text-xs mt-2 block opacity-70 ${
                    message.isUser ? "text-purple-100" : "text-gray-500"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex gap-2">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Напишите ваше сообщение..."
              className="flex-1 min-h-[60px] resize-none"
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <Button
              onClick={sendMessage}
              className="bg-purple-600 hover:bg-purple-700 text-white self-end"
              disabled={!newMessage.trim()}
            >
              <Icon name="Send" size={20} />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Нажмите Enter для отправки, Shift+Enter для новой строки
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
