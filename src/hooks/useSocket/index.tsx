import {useEffect, useRef} from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import io, {ManagerOptions, SocketOptions} from "socket.io-client";
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "universal-cookie";

export const SOCKET_URL = import.meta.env.VITE_PUBLIC_SOCKET_URL || "http://localhost:5173/";

interface SocketProps {
  options?: Partial<ManagerOptions & SocketOptions> | undefined;
}

export const useSocket = ({options}: SocketProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  const {current: socket} = useRef(
    io(SOCKET_URL, {
      ...options,
      transports: ["websocket", "polling"],
      autoConnect: false,
    }),
  );

  useEffect(() => {
    if (accessToken) {
      socket.io.opts.query = {
        accessToken,
      };
      socket.connect();
    }
    socket.on("connect_error", async (error) => {
      if (error.message === "Token is invalid or expired") {
        cookies.remove("accessToken");
        window.location.reload();
      }
    });
    return () => {
      socket.disconnect();
    };
  }, [socket, accessToken, cookies]);

  return socket;
};
