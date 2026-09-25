import { createRoot } from 'react-dom/client';
import * as Apollo from '@d.story/apollo-ui';
import '@d.story/apollo-ui/styles.css';

createRoot(document.getElementById('root')!).render(
    <div data-apollo-exports={Object.keys(Apollo).join(',')}>Apollo package consumer</div>,
);
