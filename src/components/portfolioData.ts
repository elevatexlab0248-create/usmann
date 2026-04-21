export type Category = 'All' | 'Explainer Ads' | 'AI Ads' | 'Brand Films' | 'Social Media';

export interface PortfolioVideo {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  duration: string;
  client: string;
}

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: 1,
    title: 'Product Launch Campaign',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:45',
    client: 'TechCorp',
  },
  {
    id: 2,
    title: 'Brand Story Video',
    category: 'Brand Films',
    thumbnail: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1:20',
    client: 'StyleHouse',
  },
  {
    id: 3,
    title: 'AI-Powered Ad Spot',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'NexaAI',
  },
  {
    id: 4,
    title: 'Social Reel Series',
    category: 'Social Media',
    thumbnail: 'https://images.pexels.com/photos/3714901/pexels-photo-3714901.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:15',
    client: 'GlowBrand',
  },
  {
    id: 5,
    title: 'Service Explainer',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1:00',
    client: 'FinEdge',
  },
  {
    id: 6,
    title: 'Generative AI Commercial',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3938013/pexels-photo-3938013.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'FutureStack',
  },
  {
    id: 7,
    title: 'Lifestyle Brand Film',
    category: 'Brand Films',
    thumbnail: 'https://images.pexels.com/photos/3975517/pexels-photo-3975517.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '2:00',
    client: 'Lumière Co.',
  },
  {
    id: 8,
    title: 'Instagram Story Ads',
    category: 'Social Media',
    thumbnail: 'https://images.pexels.com/photos/3848382/pexels-photo-3848382.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:15',
    client: 'UrbanWear',
  },
  {
    id: 9,
    title: 'App Promo Video',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:45',
    client: 'AppForge',
  },
  {
    id: 10,
    title: 'Neural Ad Campaign',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'Synapse Labs',
  },
  {
    id: 11,
    title: 'Corporate Brand Story',
    category: 'Brand Films',
    thumbnail: 'https://images.pexels.com/photos/3975518/pexels-photo-3975518.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3:00',
    client: 'VisionCorp',
  },
  {
    id: 12,
    title: 'TikTok Ad Pack',
    category: 'Social Media',
    thumbnail: 'https://images.pexels.com/photos/3848383/pexels-photo-3848383.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:15',
    client: 'TrendWave',
  },
];

export const categories: Category[] = ['All', 'Explainer Ads', 'AI Ads', 'Brand Films', 'Social Media'];
