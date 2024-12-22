import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";

const Header = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col lg:px-16 md:px-8 py-12">
        <div className="text-4xl font-bold text-supporting-lightGray">
          Break the red tape
        </div>
        <div className="text-supporting-darkGray text-xl font-bold leading-7">
          Our Theme
        </div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
