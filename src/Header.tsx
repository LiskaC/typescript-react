import React, { useState } from 'react';

interface HeaderProps {
    buttonText?: string; //optional property
    resetButtonText: string;
}

interface Film {
    title: string;
    date: string;
    rating: number;
    description: string;
}

export const Header = ({buttonText,  resetButtonText}: HeaderProps) => {
    const [count, setCount] = useState<number | null>(0);
    const [film, setFilm] = useState<Film | null>(null);

    const increment = () => {
        count !== null ?
        setCount(count + 1)
        :
        setCount(0)
    }
    const reset = () => {
        setCount(null)
    }

    return (
        <div>
            <h1>Header</h1>
            <button onClick={increment}>{buttonText || "Click the button!"}</button>
            <button onClick={reset}>{resetButtonText}</button>
            <p>{count}</p>
        </div>
    )
}