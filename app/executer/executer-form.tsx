'use client';

import * as React from "react"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { PostExecuterSchema } from './post-executer.schema';
import { Slider } from "@/components/ui/slider"

interface Props {
  form: ReturnType<typeof useForm<PostExecuterSchema>>;
  onSubmit: () => void;
}

export const PostExecuterForm = ({ onSubmit, form }: Props) => {
  const handleSubmit = form.handleSubmit(() => {
    onSubmit();
  });

//   console.log(form.watch());

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="host"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Host</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="count"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Count</FormLabel>
              <FormControl>
                <Slider value={field.value} onValueChange={field.onChange} min={1} max={20} step={1} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Ping It!</Button>
      </form>
    </Form>
  );
};
