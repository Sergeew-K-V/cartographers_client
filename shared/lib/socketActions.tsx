import { Dispatch, SetStateAction } from 'react';
import { ILobby } from '../api';

const deleteLobby = (
  lobbyList: ILobby[],
  setLobbyList: Dispatch<SetStateAction<ILobby[]>>,
  emptyLobby: ILobby
) => {
  const filteredLobbies: ILobby[] = lobbyList.filter(
    (lobby) => lobby.id !== emptyLobby.id
  );

  setLobbyList(filteredLobbies);
};

const updateLobby = (
  lobbyList: ILobby[],
  setLobbyList: Dispatch<SetStateAction<ILobby[]>>,
  updatedLobby: ILobby
) => {
  const updatedLobbyList: ILobby[] = lobbyList.map((lobby) => {
    if (lobby.id === updatedLobby.id) {
      return { ...updatedLobby };
    } else {
      return lobby;
    }
  });
  setLobbyList(updatedLobbyList);
};

const createLobby = (
  setLobbyList: Dispatch<SetStateAction<ILobby[]>>,
  newLobby: ILobby
) => {
  setLobbyList((prevLobbyList) => [...prevLobbyList, newLobby]);
};

export { createLobby, deleteLobby, updateLobby };
