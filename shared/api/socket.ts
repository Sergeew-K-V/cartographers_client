enum SocketEvents {
  CONNECTION = 'connection',
  DISCONNECT = 'disconnect',

  JOIN_LOBBY = 'joinLobby',
  LEAVE_LOBBY = 'leaveLobby',

  LOBBY_CREATED = 'lobbyCreated',
  CREATE_LOBBY = 'createLobby',

  USER_LEAVE_LOBBY = 'userLeaveLobby',
  UPDATE_LOBBY = 'lobbyUpdate',
  DELETE_LOBBY = 'deleteLobby',
}

export { SocketEvents };
