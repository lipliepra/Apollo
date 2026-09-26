import { createRoot } from 'react-dom/client';
import * as Apollo from '@d.story/apollo-ui';
import '@d.story/apollo-ui/reset.css';
import '@d.story/apollo-ui/styles.css';
import './styles.scss';

createRoot(document.getElementById('root')!).render(
    <div className="consumer-card apollo-p-16" data-apollo-exports={Object.keys(Apollo).join(',')}>Apollo package consumer</div>,
);
