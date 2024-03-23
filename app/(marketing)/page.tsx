import Image from "next/image";
import { Loader } from "lucide-react";
import { 
  ClerkLoaded, 
  ClerkLoading, 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[260px] h-[260px] lg:w-[500px] lg:h-[500px] mb-8 lg:mb-0">
        <Image src="/signup.webp" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-4xl font-bold text-neutral-600 max-w-[480px] text-center">
          Play, Learn, and Be Aware with Erawa Learning.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" className="w-full bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" className="bg-sky-400 w-full border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide" asChild>
                <Link href="/courses">
                  Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
