const Logout = ({ setToken }) => {
    const handleLogout = () => {
      localStorage.removeItem('accessToken');
      setToken(null);
    }
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  }