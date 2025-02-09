"use client"

import React from 'react'
import gridBg from "@/cdn/images/main_grid.avif"
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
    reset,
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
    const formdata = new FormData();
    Object.keys(data).forEach((key) => {
      formdata.append(key, data[key as keyof typeof data]);
    });
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://formsubmit.co/ajax/contact@wertex.in`);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(formdata);
    reset();
  };
  return (
    <main className='relative  my-1 sm:my-2  p-1 sm:p-2 h-auto max-h-max sm:h-auto bg-black/50'>
      <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />
      <div className='bg-gradient-to-b from-transparent via-white/5 to-transparent  m-2 sm:mx-12 sm:my-10  h-[90%] max-h-max'>
        <div className='border mx-auto backdrop-blur-sm border-border  sm:p-10 transition-all  h-full max-h-max'>
          <h1 className='hidden sm:block text-2xl font-semibold text-center mt-4 mb-10 line'>Fill in the details, our manufacturing  <br /> experts will reach out shortly.</h1>
          <h1 className=' sm:hidden text-lg font-semibold text-center mt-4 mb-10 '>Fill in the details, our manufacturing <br /> experts will reach out shortly.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4   md:w-3/4 lg:w-3/5 mx-auto flex flex-col gap-4 max-h-max'>
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

              />

            </FormField>
            <FormField label="Company Name" error={errors.companyName?.message}>
              <Input<FormValues>
                type='text'
                name='companyName'
                register={register}
                placeholder='Exotic Mile Pvt Ltd'

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
                />
              </div>
            </FormField>
            <div className='w-full  flex justify-center items-center sm:justify-end gap-5'>
              <div className='w-1/5 h-1 hidden sm:block' />
              <Button
                title='Submit'
                type='submit'
                className='w-4/5  bg-custom-gradient text-white px-4 py-3  transition-colors mt-6'
              />
            </div>

          </form>
        </div>
      </div >
    </main >
  )
}

export default JoinSection