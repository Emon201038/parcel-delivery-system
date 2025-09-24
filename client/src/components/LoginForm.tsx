import React, { useEffect } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { UserRole } from "@/types";
import { Link, useLocation, useNavigate } from "react-router";
import { useSession } from "@/providers/auth-provider";
import { RHFInput } from "./rhf-input";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { MessageSquareWarningIcon } from "lucide-react";

interface Props {}

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 characters" }),
});

const LoginForm: React.FC<Props> = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navitage = useNavigate();
  const location = useLocation();
  const session = useSession();
  const [login, { isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    if (isError) {
      toast.error("Login Failed", {
        description:
          ((error as any).message as string) || "Invalid email or password",
      });
    }
  }, []);

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await login(data).unwrap();

      toast.success("Login Successful!", {
        description: `Welcome back!`,
      });
      await session.refetch?.();

      console.log(result, "result");

      // Redirect based on role
      const dashboardPath =
        result?.user?.role === UserRole.ADMIN
          ? "/dashboard/admin"
          : result?.user?.role === UserRole.SUPER_ADMIN
          ? "/dashboard/admin"
          : result?.user?.role === UserRole.SENDER
          ? "/dashboard/sender"
          : "/dashboard/receiver";

      const searchParams = new URLSearchParams(location.search);
      const callbackUrl = searchParams.get("callbackUrl");
      if (callbackUrl) {
        navitage(callbackUrl);
      }

      navitage(dashboardPath);
    } catch (error: any) {
      toast.error("Login Failed", {
        description: error.data?.message || "Invalid email or password",
      });
    }
  };

  const receiverUserLogin = () => {
    form.setValue("email", import.meta.env.VITE_RECEIVER_MAIL as string);
    form.setValue("password", import.meta.env.VITE_RECEIVER_PASSWORD as string);
  };

  const adminUserLogin = () => {
    form.setValue("email", import.meta.env.VITE_ADMIN_MAIL as string);
    form.setValue("password", import.meta.env.VITE_ADMIN_PASSWORD as string);
  };

  const senderUserLogin = () => {
    form.setValue("email", import.meta.env.VITE_SENDER_MAIL as string);
    form.setValue("password", import.meta.env.VITE_SENDER_PASSWORD as string);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <RHFInput
          type="email"
          name="email"
          label="Email"
          control={form.control}
          placeholder="Enter your email"
        />
        <div>
          <RHFInput
            type="password"
            name="password"
            label="Password"
            control={form.control}
            placeholder="Enter your password"
          />
          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 underline text-right w-full"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>

        <Alert variant="default">
          <MessageSquareWarningIcon />
          <AlertTitle>For Testing only!</AlertTitle>
          <AlertDescription className="w-full">
            <p>Please, do not missuse this form for testing purposes.</p>
            <div className="flex flex-wrap justify-center items-center gap-2 w-full">
              <Button
                type="button"
                onClick={receiverUserLogin}
                variant={"outline"}
                className="w-full cursor-pointer"
              >
                Receiver User Login
              </Button>
              <Button
                type="button"
                onClick={senderUserLogin}
                variant={"outline"}
                className="w-full cursor-pointer"
              >
                Sender User Login
              </Button>
              <Button
                type="button"
                onClick={adminUserLogin}
                variant={"outline"}
                className="w-full cursor-pointer"
              >
                Admin Login
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </form>
    </Form>
  );
};

export default LoginForm;
