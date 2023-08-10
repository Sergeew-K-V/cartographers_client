const isSessionHost = (sessionHost: string, playerNickname: string) => {
  return sessionHost === playerNickname;
};

export default isSessionHost;
