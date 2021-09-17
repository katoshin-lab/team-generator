import React from "react";
import { useSession, signOut, signIn, providers, ClientSafeProvider } from "next-auth/client";
import Link from 'next/link';
import styled from 'styled-components';

import Header from '../components/organisms/header';

const Index = ({ providers }):JSX.Element => {
  const [session, loading] = useSession();

  const status = (): string => {
    if (loading) {
      return 'loading';
    } else if (session) {
      return 'in session';
    } else {
      return 'no session';
    }
  }

  return (
    <>
      <Header />
      <Link href="/signin">
        <a>signin</a>
      </Link>
      <div>{ status() }</div>
      <button onClick={() => signIn()}>signin</button>
      <button onClick={() => signOut()}>signout</button>
      {Object.values(providers).map((provider: ClientSafeProvider , index): JSX.Element => (
        <button key={index} onClick={() => signIn(provider.id)}>
          singin with {provider.name}
        </button>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  return { props: { providers: await providers() } };
};

export default Index;
