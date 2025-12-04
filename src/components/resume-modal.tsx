"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

type ResumeModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function ResumeModal({ isOpen, onOpenChange }: ResumeModalProps) {
  const resumeUrl = "/resume.pdf";

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95%] h-[90vh] flex flex-col p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl">My Resume</DialogTitle>
        </DialogHeader>
        <div className="flex-grow border rounded-lg overflow-hidden">
          <iframe
            src={resumeUrl}
            className="w-full h-full"
            title="Resume"
            aria-label="Resume PDF"
          />
        </div>
        <DialogFooter className="mt-4 flex-col-reverse sm:flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button asChild>
            <a href={resumeUrl} download="resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
