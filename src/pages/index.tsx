import React, { useRef, useState } from "react";
import { useSession, signOut, signIn, providers, ClientSafeProvider } from "next-auth/client";
import Link from 'next/link';
import styled from 'styled-components';

import Header from '../components/organisms/header';
// hooks
import useResizeObserver from "../hooks/commons/resizeObserver";

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

  const headerElement = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(60);
  const headerResizeCallback = (entries: ResizeObserverEntry[]): void => {
    setHeaderHeight(entries[0].contentRect.height)
  }
  useResizeObserver([headerElement], headerResizeCallback)

  return (
    <>
      <Header refObject={headerElement} />
      <StyledContentWrapper headerHeight={headerHeight}>
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
      </StyledContentWrapper>
    </>
  )
}

type ContentWrapperProps = {
  headerHeight: number
}
const StyledContentWrapper = styled.div<ContentWrapperProps>`
  margin-top: ${props => props.headerHeight}px;
`

export async function getServerSideProps() {
  return { props: { providers: await providers() } };
};

export default Index;
