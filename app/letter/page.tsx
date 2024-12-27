'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Crown, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { letterSchema, type LetterFormValues } from '@/lib/validations/letter';
import { useToast } from '@/hooks/use-toast';

export default function LetterPage() {
  const { toast } = useToast();
  const form = useForm<LetterFormValues>({
    resolver: zodResolver(letterSchema),
    defaultValues: {
      childName: '',
      age: 0, // Changed from undefined to 0
      parentEmail: '',
      wishlist: ['', '', ''], // Initialize all three wish fields
      goodBehavior: '',
      parentalConsent: false,
    },
  });

  async function onSubmit(data: LetterFormValues) {
    try {
      // TODO: Implement API call
      console.log(data);
      toast({
        title: '✨ Letter Sent Successfully!',
        description: 'The Three Wise Men will read your letter soon.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'There was a problem sending your letter. Please try again.',
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Crown className="text-yellow-500" />
            <h1 className="text-3xl font-bold text-center">Your Letter to the Three Wise Men</h1>
            <Crown className="text-yellow-500" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={3}
                        max={14}
                        placeholder="Enter your age"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      You must be between 3 and 14 years old
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent&apos;s Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="parent@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We&apos;ll send updates about your letter to this email
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormLabel>Your Wishes (Maximum 3)</FormLabel>
                {[0, 1, 2].map((index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={`wishlist.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Gift className="text-blue-500 flex-shrink-0" />
                            <Input
                              placeholder={`Wish ${index + 1}`}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <FormField
                control={form.control}
                name="goodBehavior"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your good behavior this year</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I helped my parents with..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parentalConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I confirm I have parental permission to send this letter
                      </FormLabel>
                      <FormDescription>
                        A parent or guardian must approve sending this letter
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900"
              >
                Send Letter to the Three Wise Men
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}