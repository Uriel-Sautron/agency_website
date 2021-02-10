import { createContext } from 'react';

const ModeContext = createContext({ isDark: false, toggleDark: () => {} });

export default ModeContext;
