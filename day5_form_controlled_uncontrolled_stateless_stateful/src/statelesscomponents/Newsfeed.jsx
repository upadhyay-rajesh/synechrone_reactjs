import React from "react";

const news = [
    { id: 1, title: "React 18 Released!", content: "Learn about React 18 features." },
    { id: 2, title: "JavaScript Trends 2024", content: "What's next for JavaScript?" },
    { id: 3, title: "Web3 Revolution", content: "How Web3 is changing the web." },
];

function Newsfeed() {
    return (
        <div>
            <h2>Newsfeed</h2>
            {news.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Newsfeed;
