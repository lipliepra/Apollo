import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <main>
            <h1>Apollo</h1>
            <p>Пустая основа UI-библиотеки. Компоненты будут добавляться с нуля.</p>
        </main>
    </StrictMode>,
);
