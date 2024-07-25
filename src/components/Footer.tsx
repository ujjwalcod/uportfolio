import Link from "next/link";
/*import { Button } from "@/components/ui/button";*/
import { useState, useEffect } from "react";
/*import { MailIcon } from "lucide-react";*/
import Spline from '@splinetool/react-spline';

export default function Footer() {
  // get the current time in UTC+1 time zone
  /*const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);*/

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/ujjwalcod"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Ujjwal
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Portfolio</p>
            <p className="text-sm font-semibold">❤️</p>
          </span>
        </span>
        
      </div>
    <Spline scene="https://prod.spline.design/ydsf8XJVdRQHqOtA/scene.splinecode" />
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
      
    </footer>
  );
}
