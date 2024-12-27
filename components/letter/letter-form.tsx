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
import { DrawingUpload } from './drawing-upload';

interface LetterFormProps {
  dict: any;
}

export function LetterForm({ dict }: LetterFormProps) {
  const { toast } = useToast();
  const form = useForm<LetterFormValues>({
    resolver: zodResolver(letterSchema),
    defaultValues: {
      childName: '',
      age: undefined,
      parentEmail: '',
      wishlist: ['', '', ''],
      goodBehavior: '',
      drawing: null,
      parentalConsent: false,
    },
  });

  async function onSubmit(data: LetterFormValues) {
    try {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Existing form fields... */}
        
        <FormField
          control={form.control}
          name="drawing"
          render={({ field }) => (
            <FormItem>
              <DrawingUpload
                label={dict.drawingLabel}
                description={dict.drawingDescription}
                onFileSelect={(file) => field.onChange(file)}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-semibold"
        >
          {dict.submit}
        </Button>
      </form>
    </Form>
  );
}