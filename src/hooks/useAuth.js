function useAuth() {
  function logIn(userHash) {}
  const logOut = () => {
    localStorage.clear();
  };

  return [logIn, logOut];
}

export default useAuth;
