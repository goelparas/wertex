"use client"

import React from 'react'
import gridBg from "@/cdn/main_grid.avif"
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { FormField } from '@/components/common/Form/FormField';
import Button from '@/components/common/Button/button';
import Input from '@/components/common/Input/Input';
import Dropdown from '@/components/common/Dropdown/drop-down';

// Icons 
// Zod schema
const formSchema = z.object({
  companyName: z.string().min(1, "Please enter Company Name"),
  industry: z.enum(['Textile', 'Automotive', 'Aerospace', 'Defence', "Energy", "Medical Device", "Agriculture Machinery", "Oil& Gas", "Industrial Equipment and Machinery", "Others"], {
    message: "Please Select Industry"
  }),
  email: z.string().email('Invalid email address').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  countryCode: z.enum(["+91", "+1", "+44", "+61", "+81"], {
    message: "Please select country code",
  }),
  phoneNumber: z.string().min(10, 'Phone number must have 10 digits')
});
type FormValues = z.infer<typeof formSchema>;
const JoinSection = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "+91"
    }
  });
  const industryOptions = Object.values(formSchema.shape.industry._def.values);
  const countryCodeOptions = Object.values(formSchema.shape.countryCode._def.values)

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);

  };
  return (
    <main className='relative  my-1 sm:my-2  p-1 sm:p-2 h-[60dvh] sm:h-auto'>
      <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />
      <div className='bg-gradient-to-b bg-white/5  m-4 sm:mx-12 sm:my-10  h-[90%]'>
        <div className=' border-white border-2 mx-auto backdrop-blur-sm 
 border-white/20 
 p-4
  sm:p-10
  transition-all  h-full'>
          <h1 className='hidden sm:block text-3xl font-semibold text-center my-8 '>Share your details – our experts will be in <br /> touch—let’s create something remarkable.</h1>
          <h1 className=' sm:hidden text-[16px] font-semibold text-center mt-4 mb-6'>Share your details – our experts will be in  touch—let’s create something remarkable.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full sm:w-1/2 mx-auto flex flex-col gap-4'>
            <FormField label="Industry" error={errors.industry?.message}>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <Dropdown options={industryOptions} value={field.value} onChange={field.onChange} />
                )}
              />
            </FormField>
            <FormField label="Email" error={errors.email?.message}>
              <Input<FormValues>
                type='email'
                name='email'
                register={register}
                placeholder='Enter email'
                className='w-full p-1 sm:px-3 sm:py-2    outline-none'
              />

            </FormField>
            <FormField label="Company Name" error={errors.companyName?.message}>
              <Input<FormValues>
                type='text'
                name='companyName'
                register={register}
                placeholder='Exotic Mile Pvt Ltd'
                className='w-full p-1 sm:px-3 sm:py-2 bg-gray-800  outline-none'
              />

            </FormField>

            <FormField label="Mobile" error={errors.phoneNumber?.message}>
              <div className='flex justify-between w-full gap-2'>
                <div className='sm:w-[15%]'>
                  <Controller
                    name="countryCode"
                    control={control}
                    render={({ field }) => (
                      <Dropdown options={countryCodeOptions} value={field.value} onChange={field.onChange} defaultValue='+91' />
                    )}
                  />
                </div>
                <Input<FormValues>
                  type='text'
                  name='phoneNumber'
                  register={register}
                  placeholder='920 XXX XXX X'
                  className='w-full p-1 sm:px-3 sm:py-2  appearance-none   outline-none'
                />
              </div>
            </FormField>
            <FormField label=''>
              <Button
                title='Submit'
                type='submit'
                className='w-full bg-custom-gradient text-white px-4 py-3  transition-colors mt-6'
              />
            </FormField>
          </form>

        </div>
      </div >
    </main >
  )
}

export default JoinSection