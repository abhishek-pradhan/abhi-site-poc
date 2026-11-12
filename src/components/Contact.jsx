import { useState } from 'react';
import {
  Section,
  Grid,
  GridSpan,
  Heading,
  Text,
  TextInput,
  TextArea,
  Button,
  Icon,
  HStack,
  VStack,
  Link,
  useToast,
} from '@astryxdesign/core';

const contactInfo = [
  {
    icon: 'website',
    title: 'Website',
    value: 'abhishekpradhan.com',
    href: 'https://abhishekpradhan.com',
  },
  {
    icon: 'mail',
    title: 'Email',
    value: 'pradhan.abhishek(at)outlook(dot)com',
    href: 'mailto:pradhan.abhishek(at)outlook(dot)com',
  },
  {
    icon: 'mapPin',
    title: 'Location',
    value: 'Mumbai, IN',
  },
  {
    icon: 'link',
    title: 'LinkedIn',
    value: 'linkedin.com/in/abhishekpradhan21',
    href: 'https://www.linkedin.com/in/abhishekpradhan21/',
  },
  {
    icon: 'github',
    title: 'GitHub',
    value: 'github.com/abhishek-pradhan',
    href: 'https://github.com/abhishek-pradhan',
  },
];

const socialLinks = [
  { name: 'Website', href: 'https://abhishekpradhan.com', icon: 'website' },
  { name: 'GitHub', href: 'https://github.com/abhishek-pradhan', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishekpradhan21', icon: 'link' },
  { name: 'Twitter / X', href: 'https://twitter.com/iamabhiprime', icon: 'share' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    showToast({
      type: 'success',
      title: 'Message sent!',
      description: "I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Section variant="transparent" paddingBlock={8} paddingInline={4}>
        <Grid columns={{ minWidth: 280, max: 2 }} gap={8}>
            <GridSpan>
              <VStack gap={4} align="start">
                <Heading level={1} size="xl" weight="bold" style={{ letterSpacing: '-0.02em' }}>
                  Get in Touch
                </Heading>
                <Text size="lg" color="secondary">
                  Have a project idea or want to collaborate? I'd love to hear from
                  you.
                </Text>

                <VStack gap={3}>
                  {contactInfo.map((item) => (
                    <HStack key={item.title} gap={3} align="start">
                      <Icon icon={item.icon} size="lg" color="primary" />
                      <VStack gap={0.5} align="start">
                        <Heading level={4} size="sm" weight="bold">
                          {item.title}
                        </Heading>
                        {item.href ? (
                          <Link href={item.href} target="_blank" rel="noopener noreferrer" color="secondary" size="md">
                            {item.value}
                          </Link>
                        ) : (
                          <Text size="md" color="secondary">{item.value}</Text>
                        )}
                      </VStack>
                    </HStack>
                  ))}
                </VStack>

                <HStack gap={3} wrap="wrap">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="md"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<Icon icon={social.icon} size="sm" />}
                      label={social.name}
                    />
                  ))}
                </HStack>
              </VStack>
            </GridSpan>

            <GridSpan>
              <VStack gap={4} align="stretch">
                <Heading level={3} size="lg" weight="bold">
                  Send a Message
                </Heading>
                <form onSubmit={handleSubmit}>
                  <VStack gap={4}>
                    <TextInput
                      label="Name"
                      type="text"
                      value={formData.name}
                      onChange={(value) => handleChange('name', value)}
                      placeholder="Your name"
                      isRequired
                      width="100%"
                    />
                    <TextInput
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(value) => handleChange('email', value)}
                      placeholder="you@example.com"
                      isRequired
                      width="100%"
                    />
                    <TextInput
                      label="Subject"
                      type="text"
                      value={formData.subject}
                      onChange={(value) => handleChange('subject', value)}
                      placeholder="Subject"
                      width="100%"
                    />
                    <TextArea
                      label="Message"
                      value={formData.message}
                      onChange={(value) => handleChange('message', value)}
                      placeholder="Tell me about your project..."
                      rows={5}
                      isRequired
                      width="100%"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      width="100%"
                      isLoading={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </GridSpan>
          </Grid>
      </Section>
  );
}
