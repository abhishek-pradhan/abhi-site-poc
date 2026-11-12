import {
  Section,
  HStack,
  VStack,
  Card,
  Button,
  Text,
  Badge,
  Icon,
  StackItem,
  Grid,
  GridSpan,
  Heading,
  Divider,
} from '@astryxdesign/core';
import RouterLink from './RouterLink';

const projects = [
  {
    id: 1,
    title: 'Multi-Region Data Platform',
    description:
      'A globally distributed data processing pipeline handling 50K+ events per second with sub-second latency.',
    tags: ['AWS', 'Kinesis', 'Lambda', 'DynamoDB'],
    icon: '🚀',
  },
  {
    id: 2,
    title: 'Zero-Trust Auth Service',
    description:
      'Enterprise-grade authentication and authorization platform serving 2M+ monthly active users.',
    tags: ['OAuth2', 'OpenID Connect', 'Node.js', 'PostgreSQL'],
    icon: '🔐',
  },
  {
    id: 3,
    title: 'Observability Dashboard',
    description:
      'Real-time monitoring and alerting stack for microservices infrastructure across 200+ nodes.',
    tags: ['Prometheus', 'Grafana', 'Kubernetes', 'Terraform'],
    icon: '📊',
  },
];

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '50+', label: 'Production Services' },
  { value: '12', label: 'AWS Certifications' },
  { value: '2M+', label: 'Monthly Users' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="transparent" paddingBlock={8} paddingInline={4}>
          <HStack
            direction="horizontal"
            wrap="wrap"
            gap={6}
            align="center"
            justify="between"
          >
            <StackItem size="fill" style={{ minWidth: 300 }}>
              <VStack gap={4} align="start">
                <Badge variant="subtle" size="sm">
                  Software Engineer & Cloud Architect
                </Badge>
                <Heading level={1} size="xl" weight="bold" style={{ lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                  Building scalable cloud systems<br />
                  and delightful user experiences.
                </Heading>
                <Text size="lg" color="secondary" style={{ maxWidth: '500px' }}>
                  I design and deploy resilient infrastructure on AWS, architect
                  distributed systems, and write clean, maintainable code. Based in
                  San Francisco, CA.
                </Text>
                <HStack gap={3} wrap="wrap">
                  <Button
                    variant="primary"
                    size="md"
                    href="/about"
                    as={RouterLink}
                    label="About Me"
                  />
                  <Button
                    variant="ghost"
                    size="md"
                    href="/contact"
                    as={RouterLink}
                    label="Get in Touch"
                  />
                </HStack>
              </VStack>
            </StackItem>
            <StackItem size="static" style={{ minWidth: 280, maxWidth: 320 }}>
              <VStack align="center" gap={3}>
                <Card variant="default" padding={4} width="100%" style={{ aspectRatio: '1' }}>
                  <VStack align="center" justify="center" gap={3}>
                    <img src="/profile.svg" alt="Abhishek Pradhan" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                    <Text weight="medium" color="secondary">
                      Cloud Architecture
                    </Text>
                  </VStack>
                </Card>
              </VStack>
            </StackItem>
          </HStack>
      </Section>

      {/* Featured Projects Section */}
      <Section variant="transparent" paddingBlock={8} paddingInline={4}>
          <VStack gap={6} align="start">
            <Heading level={2} size="xl" weight="bold" style={{ letterSpacing: '-0.02em' }}>
              Featured Projects
            </Heading>
            <Grid columns={{ minWidth: 240, max: 3 }} gap={4}>
              {projects.map((project) => (
                <GridSpan key={project.id}>
                  <Card variant="default" padding={4} elevation="low" style={{ height: '100%', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                    <VStack gap={3}>
                      <HStack gap={3} align="center">
                        <Text size="xl" aria-hidden="true" style={{ fontSize: '2rem' }}>
                          {project.icon}
                        </Text>
                      </HStack>
                      <VStack gap={2} align="start">
                        <Heading level={3} size="md" weight="bold">
                          {project.title}
                        </Heading>
                        <Text size="sm" color="secondary">
                          {project.description}
                        </Text>
                        <Divider />
                        <HStack gap={2} wrap="wrap">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="subtle" size="xs">
                              {tag}
                            </Badge>
                          ))}
                        </HStack>
                      </VStack>
                    </VStack>
                  </Card>
                </GridSpan>
              ))}
            </Grid>
          </VStack>
      </Section>

      {/* Stats Section */}
      <Section variant="muted" paddingBlock={6} paddingInline={4}>
          <Grid columns={{ minWidth: 180, max: 4 }} gap={4}>
            {stats.map((stat) => (
              <GridSpan key={stat.label}>
                <VStack align="center" gap={1}>
                  <Heading level={3} size="xl" weight="bold" color="primary">
                    {stat.value}
                  </Heading>
                  <Text size="sm" color="secondary" align="center">
                    {stat.label}
                  </Text>
                </VStack>
              </GridSpan>
            ))}
          </Grid>
      </Section>
    </>
  );
}
