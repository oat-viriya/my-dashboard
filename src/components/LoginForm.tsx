"use client";

import { useCallback, useTransition } from "react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserLoginFormData, userLoginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { actionLogin } from "@/lib";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(userLoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserLoginFormData> = useCallback(
    async (data) => {
      try {
        const res = await actionLogin(data);
        if (res?.success) {
          toast({ title: "Success", description: res.message });
          startTransition(() => router.push("/dashboard"));
        } else if (!res?.success) {
          throw new Error(res?.message);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
        if (error instanceof Error)
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
      }
    },
    [router, toast]
  );

  return (
    <Card className="max-sm:w-5/6 w-[350px]">
      <CardHeader>
        <CardTitle className="text-xl">Welcome to my dashboard app!</CardTitle>
        <CardDescription>Sign in to continue.</CardDescription>
      </CardHeader>
      <CardContent className="text-left">
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/* Username Field */}
            <div className="flex flex-col space-y-1.5">
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="username">Username</Label>
                    <Input {...field} id="username" placeholder="John" />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1.5">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="password">Password</Label>
                    <Input {...field} id="password" type="password" />
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button form="loginForm" type="submit" className="w-full h-auto">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
