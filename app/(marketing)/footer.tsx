import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/child_abuse.svg" 
            alt="Sexual Abuse" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Sexual Abuse
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/child_labour.svg" 
            alt="Child Labour" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Child Labour
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/child_marriage.svg" 
            alt="Child Marrriage" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Child Marrriage
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image 
            src="/online_exploitation.svg" 
            alt="Online Exploitation" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Online Exploitation
        </Button>
      </div>
    </footer>
  );
};
