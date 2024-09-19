// seed-data.ts

import { v4 as uuidv4 } from 'uuid';

export const users = [
  {
    id: uuidv4(),
    name: "Alice Smith",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Bob Johnson",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const events = [
  {
    id: uuidv4(),
    name: "Tokyo Stamp Rally",
    description_text: "Explore Tokyo's landmarks",
    description_image_url: "https://example.com/tokyo-rally.jpg",
    latitude: 35.6762,
    longitude: 139.6503,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: "Kyoto Cultural Tour",
    description_text: "Discover Kyoto's rich history",
    description_image_url: "https://example.com/kyoto-tour.jpg",
    latitude: 35.0116,
    longitude: 135.7681,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const stamps = [
  {
    id: uuidv4(),
    event_id: events[0].id,
    name: "Tokyo Tower Stamp",
    description_text: "Collected at Tokyo Tower",
    description_image_url: "https://example.com/tokyo-tower-stamp.jpg",
    latitude: 35.6586,
    longitude: 139.7454,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    event_id: events[1].id,
    name: "Kinkaku-ji Stamp",
    description_text: "Collected at Golden Pavilion",
    description_image_url: "https://example.com/kinkakuji-stamp.jpg",
    latitude: 35.0394,
    longitude: 135.7292,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const userStamps = [
  {
    id: uuidv4(),
    user_id: users[0].id,
    stamp_id: stamps[0].id,
    image_url: "https://example.com/user-tokyo-tower-stamp.jpg",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    user_id: users[1].id,
    stamp_id: stamps[1].id,
    image_url: "https://example.com/user-kinkakuji-stamp.jpg",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];