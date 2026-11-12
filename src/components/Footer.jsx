import {
  Section,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Heading,
} from '@astryxdesign/core';

export default function Footer() {
  return (
    <Section variant="muted" paddingBlock={4} paddingInline={4}>
      <VStack gap={4} align="center">
        <HStack gap={6} wrap="wrap" justify="center">
          <VStack gap={1} align="center">
            <Text weight="bold" size="lg">
              Abhishek Pradhan
            </Text>
            <Text size="md" color="secondary">
              Software Engineer & Cloud Architect
            </Text>
          </VStack>
          <Divider orientation="vertical" variant="subtle" />
          <VStack gap={1} align="center">
            <Heading level={3} size="sm" weight="bold">
              Connect
            </Heading>
            <VStack gap={1} align="center">
              <Link href="https://abhishekpradhan.com" target="_blank" rel="noopener noreferrer" color="secondary" size="sm">
                Website
              </Link>
              <Link href="https://github.com/abhishek-pradhan" target="_blank" rel="noopener noreferrer" color="secondary" size="sm">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/abhishekpradhan21" target="_blank" rel="noopener noreferrer" color="secondary" size="sm">
                LinkedIn
              </Link>
              <Link href="https://twitter.com/iamabhiprime" target="_blank" rel="noopener noreferrer" color="secondary" size="sm">
                Twitter / X
              </Link>
            </VStack>
          </VStack>
        </HStack>
        <Divider />
        <Text size="sm" color="tertiary">
          &copy; {new Date().getFullYear()} Abhishek Pradhan. All rights reserved.
        </Text>
      </VStack>
    </Section>
  );
}
