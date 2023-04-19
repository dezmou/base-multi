import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
export declare type SSocket = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
export declare const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
