import React,  { createContext} from 'react';

const LogContext = createContext({ loggedIn: false });

export default LogContext;