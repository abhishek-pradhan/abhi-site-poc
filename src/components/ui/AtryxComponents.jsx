import {
  Button,
  Card,
  TextInput,
  TextArea,
  Link,
  Stack,
  Divider,
  Text,
  Icon,
  Spinner,
  Avatar,
  Badge,
  useToast,
  Toast,
  LayerProvider,
  InputGroup,
  Field,
  FormLayout,
  Section,
  Container,
  HStack,
  VStack,
  Grid,
  GridItem,
  LinkComponentType,
} from '@astryxdesign/core';
import { useRef } from 'react';

/**
 * Atryx wrapper components that match the current design system
 * These provide a consistent API while using Atryx components under the hood
 */

// Re-export Atryx components for direct use
export {
  Button,
  Card,
  TextInput,
  TextArea,
  Link,
  Stack,
  Divider,
  Text,
  Icon,
  Spinner,
  Avatar,
  Badge,
  useToast,
  Toast,
  LayerProvider,
  InputGroup,
  Field,
  FormLayout,
  Section,
  Container,
  HStack,
  VStack,
  Grid,
  GridItem,
  type LinkComponentType,
};

/**
 * Primary button - maps to Atryx Button with primary variant
 */
export function PrimaryButton(props: React.ComponentProps<typeof Button>) {
  return <Button variant="primary" {...props} />;
}

/**
 * Secondary button - maps to Atryx Button with secondary variant
 */
export function SecondaryButton(props: React.ComponentProps<typeof Button>) {
  return <Button variant="secondary" {...props} />;
}

/**
 * Outline button - maps to Atryx Button with ghost variant
 */
export function OutlineButton(props: React.ComponentProps<typeof Button>) {
  return <Button variant="ghost" {...props} />;
}

/**
 * Full-width button wrapper
 */
export function FullWidthButton(props: React.ComponentProps<typeof Button>) {
  return <Button width="100%" {...props} />;
}

/**
 * Card wrapper with consistent styling
 */
export function StyledCard(props: React.ComponentProps<typeof Card>) {
  return <Card variant="default" {...props} />;
}

/**
 * Muted card for subtle backgrounds
 */
export function MutedCard(props: React.ComponentProps<typeof Card>) {
  return <Card variant="muted" {...props} />;
}

/**
 * Form input wrapper with consistent styling
 */
export function FormInput(props: React.ComponentProps<typeof TextInput>) {
  return <TextInput size="md" {...props} />;
}

/**
 * Form textarea wrapper
 */
export function FormTextArea(props: React.ComponentProps<typeof TextArea>) {
  return <TextArea size="md" {...props} />;
}

/**
 * Section wrapper with consistent spacing
 */
export function PageSection(props: React.ComponentProps<typeof Section>) {
  return <Section {...props} />;
}

/**
 * Container wrapper
 */
export function PageContainer(props: React.ComponentProps<typeof Container>) {
  return <Container {...props} />;
}

/**
 * Heading wrapper using Atryx Text
 */
export function Heading({ level = 1, children, className, ...props }: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Text as={Tag} weight="bold" size={level <= 2 ? "lg" : "md"} className={className} {...props}>
      {children}
    </Text>
  );
}

/**
 * Subtitle wrapper
 */
export function Subtitle({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return <Text size="md" color="muted" className={className} {...props}>{children}</Text>;
}

/**
 * Badge wrapper for tags
 */
export function Tag({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return <Badge variant="subtle" className={className} {...props}>{children}</Badge>;
}

/**
 * Link wrapper that works with React Router
 */
export function RouterLink({
  to,
  as,
  children,
  className,
  ...props
}: {
  to: string;
  as?: LinkComponentType;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return <Link href={to} as={as} className={className} {...props}>{children}</Link>;
}

/**
 * Icon wrapper
 */
export function StyledIcon({ name, size = "md", className, ...props }: {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  return <Icon name={name} size={size} className={className} {...props} />;
}

/**
 * Toast notification wrapper
 */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toastRef = useRef(null);
  return (
    <LayerProvider>
      {children}
      <Toast ref={toastRef} position="bottom-right" />
    </LayerProvider>
  );
}

/**
 * Hook to show toast notifications
 */
export function useShowToast() {
  const { showToast } = useToast();
  return showToast;
}