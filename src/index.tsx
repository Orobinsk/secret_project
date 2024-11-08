import { createRoot } from 'react-dom/client';
import { Root } from './layouts/Root';
import './styles.scss';
import { StrictMode } from 'react';

const root = document.getElementById('root');
if (!root) {
  throw new Error('root not found');
}
const container = createRoot(root);

container.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
