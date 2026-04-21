import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, videoUrl, title, onClose }) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-2xl border border-white/20 shadow-2xl max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Title */}
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black overflow-hidden">
          <iframe
            src={videoUrl}
            width="100%"
            height="100%"
            allowFullScreen
            className="w-full h-full border-none"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
