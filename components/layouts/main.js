import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gafelson's homepage" />
        <meta name="author" content="Soheil Fouladvandi" />
        <meta name="author" content="gafelson" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Soheil Fuladvandi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gafelson" />
        <meta name="twitter:creator" content="@gafelson" />
        <meta name="twitter:image" content="https://www.gafelson.me/card.png" />
        <meta property="og:site_name" content="Soheil Fouladvandi" />
        <meta name="og:title" content="Soheil Fouladvandi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.gafelson.me/card.png" />
        <title>Gafelson - Homepage</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
