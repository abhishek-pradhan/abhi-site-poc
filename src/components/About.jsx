import {
  Section,
  HStack,
  VStack,
  Card,
  Heading,
  Text,
  Badge,
  Icon,
  StackItem,
  Grid,
  GridSpan,
  Divider,
} from '@astryxdesign/core';

const experience = [
  {
    period: '2022 – Present',
    title: 'Senior Cloud Architect',
    company: 'TechScale Solutions',
  },
  {
    period: '2019 – 2022',
    title: 'Software Engineer II',
    company: 'CloudNative Inc.',
  },
  {
    period: '2016 – 2019',
    title: 'Software Engineer I',
    company: 'DevFlow Systems',
  },
];

const focusAreas = [
  'Cloud Architecture & Migration',
  'Distributed Systems Design',
  'DevOps & CI/CD Pipelines',
  'Infrastructure as Code (Terraform, CloudFormation)',
  'Containerization (Docker, Kubernetes)',
  'Observability & Monitoring',
  'Security & Compliance',
];

export default function About() {
  return (
    <Section variant="transparent" paddingBlock={8} paddingInline={4}>
        <Grid columns={{ minWidth: 320, max: 2 }} gap={8}>
          <GridSpan>
            <VStack gap={4} align="start">
              <Heading level={1} size="xl" weight="bold" style={{ letterSpacing: '-0.02em' }}>
                About Me
              </Heading>
              <Text size="lg" color="secondary">
                I'm a Software Engineer and Cloud Architect passionate about
                building scalable, reliable, and secure systems.
              </Text>
              <Text size="md" color="secondary">
                With over 8 years of experience, I've helped startups and
                enterprises design cloud-native architectures, migrate legacy
                systems to the cloud, and implement DevOps best practices. My
                expertise spans the full software development lifecycle — from
                architecture and design to deployment and operations.
              </Text>
              <Text size="md" color="secondary">
                Currently, I focus on AWS-based infrastructure, Kubernetes,
                serverless architectures, and observability. I love sharing what
                I learn through writing and speaking at tech meetups.
              </Text>

              <VStack gap={2} align="start">
                <Heading level={3} size="md" weight="bold">
                  Core Focus Areas
                </Heading>
                <VStack gap={1.5}>
                  {focusAreas.map((area) => (
                    <HStack key={area} gap={2} align="center">
                      <Icon icon="check" size="sm" color="success" />
                      <Text size="md" color="secondary">{area}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </GridSpan>

          <GridSpan>
            <VStack gap={6} align="center">
              <Card variant="default" padding={4} width="100%" maxWidth={300} style={{ aspectRatio: '1' }}>
                <VStack align="center" justify="center" gap={3}>
                  <img src="/profile.svg" alt="Abhishek Pradhan" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                  <Text weight="medium" color="secondary">
                    Abhishek Pradhan
                  </Text>
                </VStack>
              </Card>

              <VStack gap={3} align="start" width="100%" maxWidth={400}>
                <Heading level={3} size="md" weight="bold">
                  Experience
                </Heading>
                <VStack gap={4}>
                  {experience.map((job) => (
                    <HStack key={job.period} gap={3} wrap="wrap">
                      <StackItem size="static" style={{ width: 140 }}>
                        <Text size="sm" weight="semibold" color="primary">
                          {job.period}
                        </Text>
                      </StackItem>
                      <StackItem size="fill">
                        <VStack gap={0.5} align="start">
                          <Heading level={4} size="sm" weight="bold">
                            {job.title}
                          </Heading>
                          <Text size="sm" color="secondary">
                            {job.company}
                          </Text>
                        </VStack>
                      </StackItem>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </VStack>
          </GridSpan>
        </Grid>
    </Section>
  );
}
