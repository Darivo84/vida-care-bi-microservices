import UsersService from "#root/adapters/UsersService";

const UserSession = {
  user: async (userSession) =>
    UsersService.fetchUser({ userId: userSession.userId }),
};

export default UserSession;
