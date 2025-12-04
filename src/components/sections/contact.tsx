'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { SocialLinks } from '../social-links';
import { siteConfig } from '@/lib/data';
import { Mail, MessageSquare, Copy } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string(),
});

export default function Contact() {
  const [contactMode, setContactMode] = useState<'mail' | 'form'>('mail'); // Default to mail
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this to a server
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    toast({
      title: 'Email Copied!',
      description: 'Email address has been copied to clipboard.',
    });
  };

  const openMailClient = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            I'm currently open to new opportunities. Reach out through email or the contact form.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-border bg-muted p-1">
            <button
              onClick={() => setContactMode('mail')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                contactMode === 'mail'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Mail className="h-4 w-4" />
              Mail
            </button>
            <button
              onClick={() => setContactMode('form')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                contactMode === 'form'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Form
            </button>
          </div>
        </div>

        {/* Mail View */}
        {contactMode === 'mail' && (
          <div className="text-center space-y-6">
            <div className="bg-muted/50 border rounded-lg p-8">
              <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Send me an email</h3>
              <p className="text-muted-foreground mb-6">
                Click the email address below to open your email client, or copy it to your clipboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <div className="text-lg font-mono bg-background border rounded px-4 py-2">
                  {siteConfig.email}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyEmail}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button size="sm" onClick={openMailClient}>
                    <Mail className="h-4 w-4 mr-2" />
                    Open Mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form View */}
        {contactMode === 'form' && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} rows={5}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        )}

        <div className="flex justify-center gap-2 mt-12">
          <SocialLinks variant="contact" />
        </div>
      </div>
    </section>
  );
}
