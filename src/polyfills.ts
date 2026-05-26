import {Buffer} from "buffer";
import process from "process";
import EventEmitter from "events";

const globalScope = globalThis as typeof globalThis & {
    Buffer?: typeof Buffer;
    EventEmitter?: typeof EventEmitter;
    global?: typeof globalThis;
    process?: typeof process;
};

globalScope.global = globalScope;
globalScope.process = globalScope.process || process;
globalScope.Buffer = globalScope.Buffer || Buffer;
globalScope.EventEmitter = globalScope.EventEmitter || EventEmitter;
