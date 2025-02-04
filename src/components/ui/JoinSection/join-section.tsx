"use client"

import React from 'react'
import gridBg from "@/cdn/main_grid.avif"
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { FormField } from '@/components/common/Form/FormField';
import Button from '@/components/common/Button/button';
import Input from '@/components/common/Input/Input';

// Icons 
// Zod schema
const formSchema = z.object({
  companyName: z.string(),
  industry: z.enum(['technology', 'finance', 'healthcare', 'other']),
  email: z.string().email('Invalid email address').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  countryCode: z.string().min(1, 'Country code is required'),
  phoneNumber: z.string().min(10, 'Phone number must have 10 digits')
});
type FormValues = z.infer<typeof formSchema>;
const JoinSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    // Handle form submission here
    reset();
  };
  return (
    <main className='relative m-9 p-5'>
      <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />
      <div className='bg-gradient-to-b bg-white/5 m-12 '>
        <div className=' border-white border-2 mx-auto backdrop-blur-sm 
 border-white/20 
  p-10
  transition-all '>
          <h1 className='text-3xl font-semibold text-center my-8'>Share your details – our experts will be in<br /> touch—let’s create something remarkable.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto flex flex-col gap-4'>
            <FormField label="Industry" error={errors.industry?.message}>
              <div className='flex justify-between w-full gap-2 bg-muted'>
                <select
                  {...register('industry')}
                  className= {` w-full p-2 text-white bg-muted border border-border appearance-none`}
                >
                  <option value='' className='bg-muted' >Select Industry</option>
                  <option value='technology'>Technology</option>
                  <option value='finance'>Finance</option>
                  <option value='healthcare'>Healthcare</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </FormField>

            <FormField label="Email" error={errors.email?.message}>
              <Input<FormValues>
                type='email'
                name='email'
                register={register}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-600   outline-none'
              />

            </FormField>
            <FormField label="Company Name" error={errors.companyName?.message}>
              <Input<FormValues>
                type='text'
                name='companyName'
                register={register}
                className='w-full px-3 py-2 bg-gray-800 border border-gray-600  outline-none'
              />

            </FormField>

            <FormField label="Mobile" error={errors.phoneNumber?.message}>
              <div className='flex justify-between w-full gap-2'>
                <select
                  {...register('countryCode')}
                  className='w-1/5 bg-muted'
                >
                  <option value='+91'>+91</option>
                  <option value='+1'>+1 </option>
                  <option value='+44'>+44</option>
                  <option value='+61'>+61</option>
                </select>

                <Input<FormValues>
                  type='text'
                  name='phoneNumber'
                  register={register}
                  className='w-full px-3 py-2  appearance-none bg-gray-800 border border-gray-600 contents-[]  outline-none'
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