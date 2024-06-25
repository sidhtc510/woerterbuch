"use client";

import React, { useState, useEffect } from 'react';

const TestComp = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);
    const [chatClient, setChatClient] = useState(null);

    useEffect(() => {
        // Создаем тег <script> для загрузки внешнего скрипта
        const script = document.createElement('script');
        script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/oversea/index.js';
        script.async = true;

        script.onload = () => {
            // Проверяем доступность WebChatClient в глобальном объекте
            if (window.CozeWebSDK && window.CozeWebSDK.WebChatClient) {
                const { WebChatClient } = window.CozeWebSDK;
                const client = new WebChatClient({
                    config: {
                        bot_id: '7384495243502288902',
                    },
                    componentProps: {
                        title: 'Coze',
                    },
                });
                setChatClient(client);
            } else {
                console.error('WebChatClient не доступен после загрузки скрипта.');
            }
        };

        script.onerror = (error) => {
            console.error('Ошибка при загрузке скрипта:', error);
        };

        // Добавляем скрипт в документ
        document.body.appendChild(script);

        // Удаляем скрипт при размонтировании компонента
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const sendQueryToBot = async (query) => {
        if (!chatClient) {
            return;
        }
        try {
            const response = await chatClient.sendMessage({ text: query });
            return response;
        } catch (error) {
            console.error('Ошибка при отправке запроса к боту:', error);
            return null;
        }
    };

    const handleInput = async (event) => {
        const query = event.target.value;
        setQuery(query);

        if (query.trim()) {
            const response = await sendQueryToBot(query);
            if (response) {
                setResponse(JSON.stringify(response, null, 2));
            } else {
                setResponse('Произошла ошибка. Попробуйте снова.');
            }
        } else {
            setResponse('');
        }
    };

    return (
        <div>
            <h1>Поиск с Coze Bot</h1>
            <input
                type="text"
                id="searchInput"
                placeholder="Введите слово на немецком..."
                onInput={handleInput}
            />
            <div id="responseOutput">
                {response && <pre>{response}</pre>}
            </div>
        </div>
    );
};

export default TestComp;