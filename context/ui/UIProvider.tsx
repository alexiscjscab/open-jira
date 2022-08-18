import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({
      type: 'UI - Set isAddingEntry',
      payload: isAdding
    })
  }

  const openSideMenu = () =>
    dispatch({
      type: 'UI - Open Sidebar',
    });

  const closeSideMenu = () =>
    dispatch({
      type: 'UI - Close Sidebar',
    });

  const startDragging = () => {
    dispatch({
      type: 'UI - Start Dragging',
    })
  }

  const stopDragging = () => {
    dispatch({
      type: 'UI - Stop Dragging'
    })
  }
    
  return (
    <UIContext.Provider
      value={{
        ...state,

        // metodos
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        stopDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
