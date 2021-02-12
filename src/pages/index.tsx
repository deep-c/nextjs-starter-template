import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

const IndexPage: React.SFC<unknown> = () => {
    const [session] = useSession();

    return (
        <>
            {!session && (
                <>
                    Not signed in! <br />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            signIn();
                        }}
                    >
                        Sign in
                    </button>
                </>
            )}
            {session && (
                <>
                    Signed in as {session.user.email}! <br />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            signOut();
                        }}
                    >
                        Sign out
                    </button>
                </>
            )}
        </>
    );
};

export default IndexPage;
