
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Photo {
  id: number;
  url: string;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Фотографии</span>
          <span className="text-sm text-blue-600 cursor-pointer">Показать все</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-md overflow-hidden h-24 md:h-32">
              <img
                src={photo.url}
                alt={photo.alt}
                className="object-cover w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoGrid;
