export const profile = (userInfo) => {
  return {
    login: userInfo.data.viewer.login,
    name: userInfo.data.viewer.name
  };
};

export const repositories = (userInfo) => userInfo.data.viewer.repositories.nodes