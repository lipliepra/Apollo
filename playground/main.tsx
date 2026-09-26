import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/reset.scss';
import '../src/styles.scss';
import './styles.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <main className="demo">
            <h1>Apollo · стили</h1>
            <p>Общие темы, токены, типографика и миксины из Daily.Story.</p>
            <div className="demo-controls">
                <label>
                    Тема{' '}
                    <select defaultValue="dark" onChange={(event) => {
                        document.documentElement.dataset.theme = event.target.value;
                    }}>
                        <option value="dark">Тёмная</option>
                        <option value="light">Светлая</option>
                    </select>
                </label>
                <label>
                    Акцент{' '}
                    <select defaultValue="orange" onChange={(event) => {
                        document.documentElement.dataset.brand = event.target.value;
                    }}>
                        <option value="orange">Оранжевый</option>
                        <option value="magenta">Маджента</option>
                        <option value="teal">Бирюзовый</option>
                    </select>
                </label>
            </div>
            <section className="demo-card apollo-p-16 apollo-rich-text">
                <h2>Типографика и отступы</h2>
                <p>Текст карточки использует Apollo. Шрифты пока берутся из системы.</p>
                <p><a href="#tokens">Ссылка на палитру</a></p>
                <ul><li>Адаптивные заголовки</li><li>Общие CSS-переменные</li></ul>
            </section>
            <section id="tokens" className="demo-swatches" aria-label="Палитра">
                {['--apollo-brand', '--apollo-color-font-primary', '--apollo-color-status-positive-primary', '--apollo-color-status-negative-primary'].map((token) => (
                    <div className="demo-card apollo-p-16" key={token}>
                        <div className="demo-swatch" style={{ background: `var(${token})` }} />
                        <code>{token.replace('--apollo-', '')}</code>
                    </div>
                ))}
            </section>
            <div className="demo-skeleton" role="status" aria-label="Загрузка" />
        </main>
    </StrictMode>,
);
