import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from './firebase'; //Import your firebase auth instance

const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // ... rest of your component code using the 'user' state
  return (
    //JSX
  );
};
export default MyComponent;