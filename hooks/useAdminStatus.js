import { useState, useEffect } from 'react';

export const useAdminStatus = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  return isAdmin;
};
