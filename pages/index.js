// HomePage
// .
// .
// .
// @gafelson
import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, It's gafelson!</h1>
      <HStack pt={4}>
        <Button variant="outline" onClick={() => setCount(count + 1)}>
          Click me
        </Button>
        <Text>Count: {count}</Text>
      </HStack>
    </>
  );
}
