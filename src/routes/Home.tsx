import { Search } from "../components/Search";
import { useLayoutEffect, useRef, useState } from "react";
import { UserProps } from "../types/user";
import { User } from "../components/User";
import { Error } from "../components/Error";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  const scrollToUser = () => {
    if (userRef.current) {
      userRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // fetching data from the API using fetch:
  const loadUser = async (userName: string) => {
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (res.status === 404) {
        setError(true);
        setUser(null);
      } else {
        const data = await res.json();
        const { avatar_url, login, location, followers, following } = data;
        const userData: UserProps = {
          avatar_url,
          login,
          location,
          followers,
          following,
        };
        setUser(userData);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setUser(null);
    }
  };

  useLayoutEffect(() => {
    if (user) {
      scrollToUser();
    }
  }, [user]);

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && !error && (
        <div ref={userRef}>
          <User {...user} />
        </div>
      )}
      {error && <Error />}
    </div>
  );
};
