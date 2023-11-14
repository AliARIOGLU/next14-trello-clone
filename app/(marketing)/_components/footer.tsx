import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center w-full justify-between">
        <div className="flex gap-x-2 items-center text-slate-600 order-2 md:order-1">
          <Logo />
          <p className="sm md:text-md">All Rights Reserved © Taskify.com</p>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full order-1 md:order-2">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
