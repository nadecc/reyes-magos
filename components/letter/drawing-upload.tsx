'use client';

import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DrawingUploadProps {
  onFileSelect: (file: File | null) => void;
  label: string;
  description: string;
}

export function DrawingUpload({ onFileSelect, label, description }: DrawingUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onFileSelect(null);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      <div className={cn(
        "border-2 border-dashed rounded-lg p-6",
        "bg-muted/50 hover:bg-muted/80 transition-colors",
        "flex flex-col items-center justify-center gap-4",
        preview ? "border-primary" : "border-muted-foreground/25"
      )}>
        {preview ? (
          <div className="relative w-full">
            <img 
              src={preview} 
              alt="Drawing preview" 
              className="max-h-64 mx-auto rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <label className="cursor-pointer text-center">
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Click to upload your drawing</span>
              <span className="text-xs text-muted-foreground">
                PNG, JPG or PDF up to 10MB
              </span>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/png,image/jpeg,application/pdf"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}