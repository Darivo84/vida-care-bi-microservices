import UsersService from "#root/adapters/UsersService";

const createUserSessionResolver = async (obj, { email, password }, context) => {
  // When a user logs in create the session and store in DB
  const userSession = await UsersService.createUserSession({ email, password });
  // Set session in cookie
  context.res.cookie("userSessionId", userSession.id, {
    httpOnly: true,
    // One hour expiry
    // maxAge: 360000,
  });

  return userSession;
};

export default createUserSessionResolver;
