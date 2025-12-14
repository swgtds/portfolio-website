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
import { Download, ExternalLink } from "lucide-react";

type ResumeModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function ResumeModal({ isOpen, onOpenChange }: ResumeModalProps) {
  // Google Drive link for preview (embed format)
  const resumeViewUrl = "https://drive.google.com/file/d/1HSyYRFUTONeSNJ0y549iMNVQmelEe8AA/preview";
  // Google Drive link for download (direct download format)
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1HSyYRFUTONeSNJ0y549iMNVQmelEe8AA";

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Create a temporary link for download
    const link = document.createElement('a');
    link.href = resumeDownloadUrl;
    link.download = 'resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] h-[80vh] flex flex-col p-4">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl">Resume</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 border rounded overflow-hidden">
          <iframe
            src={resumeViewUrl}
            className="w-full h-full"
            title="Resume"
            style={{ border: 'none' }}
            allow="autoplay"
          />
        </div>
        
        <DialogFooter className="pt-3">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
