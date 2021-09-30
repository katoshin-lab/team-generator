import Head from 'next/head';

const HeadElement = () => {
  return (
    <Head>
      <Title />
      <WebFont />
    </Head>
  )
}

export default HeadElement;

const Title = () => <title>Team-Generator</title>

// Web Font
const WebFont = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" />
    <style>
      {`
        *{font-family: 'Nunito', sans-serif;}
      `}
    </style>
  </>
)
