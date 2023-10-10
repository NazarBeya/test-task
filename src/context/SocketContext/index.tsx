import React, {
  createContext, ReactNode, useCallback, useContext, useMemo,
} from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {Socket} from "socket.io-client";
// eslint-disable-next-line import/no-extraneous-dependencies
import {useSocket} from "../../hooks/useSocket";

export type SocketContextType = {
  socket: Socket;
  getSocketData: (event: string, data?: Record<string, string | number | string[]>) => void;
};

const SocketContext = createContext<SocketContextType>({
  socket: {} as Socket,
  getSocketData: () => {},
});

interface Props {
  children: ReactNode;
}

export function SocketProvider({children}: Props) {
  const socket = useSocket({});

  const getSocketData = useCallback(
    (event: string, data?: Record<string, string | number | string[]>) => {
      socket.emit(event, data);
    },
    [socket],
  );

  const value = useMemo(
    () => ({
      socket,
      getSocketData,
    }),
    [
      socket,
      getSocketData,
    ],
  );
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}

export const useSocketContext = () => useContext(SocketContext);
