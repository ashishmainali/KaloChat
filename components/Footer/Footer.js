// Footer.js
import { Text, View } from '@aws-amplify/ui-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <View padding="1rem" borderTop="1px solid lightgray">
      <Text textAlign="center">
        <Link href="https://www.example1.com">Privacy Policy</Link>
        {' | '}
        <Link href="https://www.example2.com">Data Policy</Link>
        {' | '}
        <Link href="https://www.example3.com">Feature Request</Link>
      </Text>
    </View>
  );
};
