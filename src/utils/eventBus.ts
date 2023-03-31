 type ListenerCallback<T> = (data: T) => void;

interface IEventBus<T> {
  on(event: string, callback: ListenerCallback<T>): void;
  off(event: string, callback: ListenerCallback<T>): void;
  emit(event: string, args?: T): void;
}

export default class EventBus<T> implements IEventBus<T> {
  private listeners: { [event: string]: ListenerCallback<T>[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: ListenerCallback<T>): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: ListenerCallback<T>): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: string, ...args: any): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: any): void => {
      listener(...args);
    });
  }
}
