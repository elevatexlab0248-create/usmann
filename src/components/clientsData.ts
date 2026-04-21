import jayImage from '../assets/jay.jpg';
import alberImage from '../assets/alber.jpg';
import sandyImage from '../assets/sandy.jpg';

export interface Client {
  id: number;
  name: string;
  platform: string;
  followers: string;
  link: string;
  avatar: string;
  tagline: string;
}

export const clientsData: Client[] = [
  {
    id: 1,
    name: "Damar VanPutten",
    platform: "Instagram",
    followers: "50.7K",
    link: "https://www.instagram.com/damar.luxe/",
    avatar: "https://www.luxelistingsnj.com/wp-content/uploads/2025/01/width_1184.jpg",
    tagline: "Realtor"
  },
  {
    id: 2,
    name: "Jay Rodriguez",
    platform: "Instagram",
    followers: "17.8K",
    link: "https://www.instagram.com/champion_estates/",
    avatar: jayImage,
    tagline: "Real Estate Investor & Golden Glove Champion"
  },
  {
    id: 3,
    name: "Darrell Michael Bailey",
    platform: "Instagram",
    followers: "4.8K",
    link: "https://www.instagram.com/darrellmichaelbailey/",
    avatar: "https://cdn2.lnk.bi/profilepics/-2050141_20241003524.png",
    tagline: "Investor & Realtor"
  },
  {
    id: 4,
    name: "minaleex",
    platform: "Instagram",
    followers: "2.3K",
    link: "https://www.instagram.com/minaleex/",
    avatar: "https://www.flowcode.com/_next/image?url=https%3A%2F%2Fcdn.flowpage.com%2Fimages%2F8e1b3ba4-5efd-4fcf-8782-b590cf0c281a-profile-picture%3Fm%3D1681214001&w=256&q=75",
    tagline: "𝚁𝚎𝚊𝚕 𝙴𝚜𝚝𝚊𝚝𝚎 𝙼𝚊𝚝𝚌𝚑𝚖𝚊𝚔𝚎𝚛"
  },
  {
    id: 5,
    name: "Sandy Cuevas",
    platform: "Instagram",
    followers: "105K",
    link: "https://www.instagram.com/cuevassandy/",
    avatar: sandyImage,
    tagline: "Real Estate Agent & Investor"
  },
  {
    id: 6,
    name: "Alberi Rosario",
    platform: "Instagram",
    followers: "9.2K",
    link: "https://www.instagram.com/alberirosario/",
    avatar: alberImage,
    tagline: "Weichert Realtors agent & Foreclosures specialist"
  }
];