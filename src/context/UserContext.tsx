import { createContext, useContext, useState } from 'react';

type UserContextType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({
  userName: '',
  setUserName: () => {},
});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}
