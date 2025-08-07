'use client';

import { ShareIcon } from '@heroicons/react/24/outline';

interface ShareButtonProps {
  title: string;
  description: string;
}

export default function ShareButton({ title, description }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <ShareIcon className="h-4 w-4" />
      分享文章
    </button>
  );
} 