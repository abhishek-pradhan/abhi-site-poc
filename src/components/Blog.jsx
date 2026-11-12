import {
  Section,
  VStack,
  HStack,
  Card,
  Heading,
  Text,
  Badge,
  Grid,
  GridSpan,
  Divider,
  Icon,
} from '@astryxdesign/core';

const posts = [
  {
    id: 1,
    title: 'Designing Multi-Region Active-Active Architectures on AWS',
    excerpt:
      'How to build globally distributed applications with low latency and high availability using Route 53, Global Accelerator, and DynamoDB Global Tables.',
    date: 'Nov 5, 2026',
    readTime: '8 min read',
    tags: ['AWS', 'Architecture', 'Global'],
  },
  {
    id: 2,
    title: 'Zero-Trust Networking with AWS VPC and Transit Gateway',
    excerpt:
      'Implementing zero-trust network architecture using AWS Transit Gateway, VPC endpoints, and security groups for least-privilege access.',
    date: 'Oct 18, 2026',
    readTime: '6 min read',
    tags: ['Networking', 'Security', 'AWS'],
  },
  {
    id: 3,
    title: 'Observability at Scale: Prometheus + Grafana on EKS',
    excerpt:
      'Setting up a scalable observability stack for Kubernetes clusters with Prometheus, Grafana, and Alertmanager across 200+ nodes.',
    date: 'Sep 22, 2026',
    readTime: '10 min read',
    tags: ['Kubernetes', 'Observability', 'DevOps'],
  },
  {
    id: 4,
    title: 'Serverless Event Processing with EventBridge and Lambda',
    excerpt:
      'Building event-driven architectures using Amazon EventBridge, Lambda, and SQS for decoupled, scalable workloads.',
    date: 'Aug 30, 2026',
    readTime: '7 min read',
    tags: ['Serverless', 'Lambda', 'EventBridge'],
  },
];

export default function Blog() {
  return (
    <Section variant="transparent" paddingBlock={8} paddingInline={4}>
        <VStack gap={6} align="start">
          <VStack gap={2} align="center" style={{ textAlign: 'center' }}>
            <Heading level={2} size="xl" weight="bold" style={{ letterSpacing: '-0.02em' }}>
              Blog
            </Heading>
            <Text size="lg" color="secondary" style={{ maxWidth: '600px' }}>
              Sharing insights on cloud architecture, distributed systems, and
              software engineering.
            </Text>
          </VStack>

          <Grid columns={3} gap={4} responsive={[
            { maxWidth: 900, columns: 2 },
            { maxWidth: 600, columns: 1 },
          ]}>
            {posts.map((post) => (
              <GridSpan key={post.id}>
                <Card variant="default" padding={4} elevation="low" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <VStack gap={3} style={{ flex: 1 }}>
                    <HStack gap={2} wrap="wrap">
                      <Text size="xs" color="tertiary">{post.date}</Text>
                      <Divider orientation="vertical" variant="subtle" />
                      <Text size="xs" color="tertiary">{post.readTime}</Text>
                    </HStack>
                    <Heading level={3} size="md" weight="bold">
                      {post.title}
                    </Heading>
                    <Text size="sm" color="secondary">
                      {post.excerpt}
                    </Text>
                    <Divider />
                    <HStack gap={2} wrap="wrap">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="subtle" size="xs">
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </Card>
              </GridSpan>
            ))}
          </Grid>
        </VStack>
    </Section>
  );
}
