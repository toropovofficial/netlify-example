import { User } from '../api/AuthApi';
import Block from './block';
import EventBus from './eventBus';
import { set } from './helpers';

export enum StoreEvents {
  Updated = 'Updated',
}

type State = {
  user: {
    data: null | User;
    isLoading: boolean;
    hasError: boolean;
  },
  activeChat: any
  chats: any
}

const initialState: State = {
  user: {
    data: null,
    isLoading: true,
    hasError: false,
  },
  activeChat: {name: 'test'},
  chats: [],
};

class Store extends EventBus {
  private state = initialState;

  public set(keypath: string, value: unknown) {
    set(this.state, keypath, value);

    try {
      this.emit(StoreEvents.Updated, this.state);
    } catch (error) {
      // console.log(error)
    }
  }

  public getState() {
    return this.state;
  }

  public getActiveChat() {
    return this.state.activeChat;
  }
}

const store = new Store();

export const withStore = (mapStateToProps: (state: State) => any) => {
  return (Component: typeof Block) => {
    return class WithStore extends Component {
      constructor(props: any) {
        const mappedState = mapStateToProps(store.getState());
        super({ ...props, ...mappedState });

        store.on(StoreEvents.Updated, (newState) => {

          const newMappedState = mapStateToProps(newState);
          this.setProps(newMappedState);
        });
      }
    };
  };
};


export { store };
