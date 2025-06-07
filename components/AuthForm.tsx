"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import React, { useState } from 'react'
import CustomInput from "./CustomInput"
import { formSchema as authFormSchema } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signUp, signIn } from "@/lib/actions/user.action"
import PlaidLink from "./PlaidLink"

const AuthForm = ({type }: {type: string}) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const formSchema = authFormSchema(type)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          address1: "",
          city: "",
          state: "",
          postalCode: "",
          dateOfBirth: "",
          ssn: "",
       
        },
      })
    
      const onSubmit = async (data: z.infer<typeof formSchema>)  => {
        setIsLoading(true)
        try{
            if(type === 'sign-in'){
                const response = await signIn({
                    email: data.email,
                    password: data.password}
                )

                if(response){
                    router.push('/')
                }
            }

            if(type === 'sign-up'){
                const userData = {
            firstName: data.firstName!,
            lastName: data.lastName!,
            address1: data.address1!,
            city: data.city!,
            state: data.state!,
            postalCode: data.postalCode!,
            dateOfBirth: data.dateOfBirth!,
            ssn: data.ssn!,
            email: data.email,
            password: data.password
          }

                const newUser = await signUp(userData)
                setUser(newUser)
            }



        }catch(error){
            console.log(error)
        }
        finally{
        setIsLoading(false)
        }

      }
  return (
    <section className='flex min-h-screen w-full items-center justify-center px-4 py-10' >
        <div className="w-full max-w-[420px] flex flex-col gap-5 md:gap-8">
        <header className='flex flex-col gap-5 md:gap-8 items-center' >
            <h1 className='text-2xl font-bold'>Velora</h1>

        <div className='flex flex-col gap-4 md:gap-'>
            <h1 className='text-2xl font-bold text-center '>
                {
                    user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'
                }
                <p className='text-sm text-gray-500'>
                    {
                        user ? 'Link your account to get started': 
                        'Please enter your details to get started'
                    }

                </p>
            </h1>
        </div>

        </header>
        {
            user ? (
               <div className='flex flex-col gap-4 md:gap-8'>
                    <PlaidLink user={user} variant="primary" />
               </div> 
            ) : (
                <>
                 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                  </div>
                  <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                  <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                    <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                    <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                  </div>
                </>
              )}
        <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
        <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />
         <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading}      
                >{isLoading ? (
                    <>
                    <Loader2 size={14} className="mr-2 animate-spin" /> &nbsp; Loading
                    </>
                ):type === 'sign-in' 
                    ? 'Sign In' : 'Sign Up' }                  
                    
                </Button>
              </div>
      </form>
    </Form>

    <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>


                </>
            )
        }

</div>
    </section>
  )
}

export default AuthForm
