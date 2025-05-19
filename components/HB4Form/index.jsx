"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import axios from "axios"

// Define form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  school: z.string().min(1, { message: "School is required" }),
  levelOfStudy: z.string().min(1, { message: "Level of study is required" }),
  countryOfResidence: z.string().min(1, { message: "Country is required" }),
  linkedinUrl: z
    .string()
    .url({ message: "Valid LinkedIn URL is required" })
    .optional()
    .or(z.literal("")),

  // MLH Checkboxes
  mlhCodeOfConduct: z.literal(true, {
    errorMap: () => ({ message: "You must accept the MLH Code of Conduct" }),
  }),
  mlhPrivacyPolicy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the MLH Privacy Policy" }),
  }),
  mlhEmailConsent: z.boolean(),
})

const HB4Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      phoneNumber: "",
      email: "",
      school: "",
      levelOfStudy: "",
      countryOfResidence: "",
      linkedinUrl: "",
      mlhCodeOfConduct: false,
      mlhPrivacyPolicy: false,
      mlhEmailConsent: false,
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await axios.post("/api/hackbyte4", {
        body: JSON.stringify(data),
      })

      toast({
        title: "Registration submitted successfully!",
        description: "Thank you for registering for HackByte 4!",
      })
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto text-white bg-black/50 mb-12 pt-4">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      First Name<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Last Name<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="Last Name"
                        {...field}
                      />
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
                    <FormLabel>
                      Age<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="Insert your age"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone Number<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="Phone Number"
                        {...field}
                      />
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
                    <FormLabel>
                      Email<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      School<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="Enter your school"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="levelOfStudy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Level of Study<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="Enter your level of study"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="countryOfResidence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Country of Residence
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="Enter your country of residence"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/70 text-black placeholder:text-black/50"
                        placeholder="https://linkedin.com/in/yourprofile"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* MLH Checkboxes */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">MLH Agreement</h2>
              <p className="text-sm text-muted-foreground">
                We are currently in the process of partnering with MLH. The
                following 3 checkboxes are for this partnership. If we do not
                end up partnering with MLH, your information will not be shared.
              </p>

              <FormField
                control={form.control}
                name="mlhCodeOfConduct"
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
                        I have read and agree to the{" "}
                        <a
                          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary underline"
                        >
                          MLH Code of Conduct
                        </a>
                        .<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mlhPrivacyPolicy"
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
                        I authorize you to share my application/registration
                        information with Major League Hacking for event
                        administration, ranking, and MLH administration in-line
                        with the{" "}
                        <a
                          href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary underline"
                        >
                          MLH Privacy Policy
                        </a>
                        . I further agree to the terms of both the{" "}
                        <a
                          href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary underline"
                        >
                          MLH Contest Terms and Conditions
                        </a>{" "}
                        and the{" "}
                        <a
                          href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary underline"
                        >
                          MLH Privacy Policy
                        </a>
                        .<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mlhEmailConsent"
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
                        I authorize MLH to send me occasional emails about
                        relevant events, career opportunities, and community
                        announcements.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

            <Button
              type="submit"
              className="w-full bg-white text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default HB4Form
