import { zodResolver } from "@hookform/resolvers/zod"

import {  Form,  FormControl,  FormField,  FormItem,  FormLabel,  FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { SignUpValidation } from "@/lib/validation"
import { z } from "zod"
 


const SignUpForms = () => {
  const isLoading = true;

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignUpValidation>>({
      resolver: zodResolver(SignUpValidation),
      defaultValues: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof SignUpValidation>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    
    <Form {...form}>

      <div className="sm:w-420 py-2 flex-center flex-col ">
        <img src="/assets/images/logo.svg" className="h-10" alt="logo" />

        <h1 className="h3-bold md:h2-bold pt-3 md:pt-12">Create New Account</h1>
        <p className="text-light-3 small-medium md:base-regular mt-2">To Use Terrygram fill your details</p>
      

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
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
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                Loading ...
              </div>
            ):"sign up"}
            </Button>
        </form>
      </div>
    </Form>
    
  )
}

export default SignUpForms