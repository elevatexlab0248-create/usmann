import React from 'react';
import { ShowcaseVideo } from './types';

interface VideoShowcaseProps {
  videos: ShowcaseVideo[];
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ videos }) => {
  // Only show videos that have a valid URL
  const validVideos = videos.filter(video => video.videoUrl);

  if (validVideos.length === 0) return null;

  return (
    <div className="flex gap-8 justify-center flex-wrap">
      {validVideos.map((video) => (
        <div key={video.id} className="relative max-w-[200px]">
          <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-[#4DC035]/10
            transform transition-all duration-300 hover:scale-105 hover:border-[#4DC035]/30
            hover:shadow-[0_0_25px_rgba(77,192,53,0.2)]">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoShowcase;