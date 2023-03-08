import React from 'react';
import { createRoot } from 'react-dom/client';
import MontyConfirm from './MontyConfirm';


createRoot(document.getElementById("root")).render(
  <MontyConfirm isDisabled={false} />
);