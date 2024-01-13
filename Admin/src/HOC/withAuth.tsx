// // withAuth.tsx
// import { ComponentType, ReactElement, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { AuthContext } from '../context/loginContect';

// interface WithAuthProps {
//   redirectUnauthorizedTo?: string;
// }

// const withAuth = (WrappedComponent: ComponentType, { redirectUnauthorizedTo = '/login' }: WithAuthProps = {}) => {
//   return (props: Record<string, unknown>): ReactElement => {
//     const router = useRouter();
//     const { signinUser } = AuthContext();

//     useEffect(() => {
//       if (!signinUser.isAuthenticated) {
//         router.replace(redirectUnauthorizedTo);
//       }
//     }, [signinUser.isAuthenticated, router]);

//     if (!signinUser.isAuthenticated) {
//       return null; // Or a loading spinner, or any other component you want to show while checking authentication
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
