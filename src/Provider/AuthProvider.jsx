import { getAuth, onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import { app } from '../Firebase/Firebase.config';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setUser } from '../Feature/Reducer/AuthSlice';
const auth =getAuth(app)
const AuthProvider = ({ children }) => {
const dispatch =useDispatch()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            dispatch(setLoading(true))
            try {
                if (currentUser) {
                    const serializedUser = {
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        emailVerified: currentUser.emailVerified,
                        photoURL:currentUser.photoURL
                    };
                   dispatch(setUser(serializedUser))
                }
                else {
                  dispatch(setUser(null))
    
                }
            }
            catch (error) {
                dispatch(setUser(null))
            } finally {
                dispatch(setLoading(false))
            }
        });
     
        return () => unSubscribe();
      }, [dispatch]);

    return children
};


AuthProvider.propTypes = {
    children: PropTypes.any
  };
export default AuthProvider;