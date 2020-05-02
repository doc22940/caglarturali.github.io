import { ContactItem, Page } from '../models';

export const contact: Page<ContactItem> = {
  name: 'contact',
  desc: 'Feel free to contact me',
  content: [
    {
      name: 'Telegram',
      url: 'https://t.me/caglarturali',
      icon: ['fab', 'telegram-plane'],
      isMain: true,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/caglarturali',
      icon: ['fab', 'github'],
      isMain: false,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/caglarturali',
      icon: ['fab', 'linkedin'],
      isMain: false,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/caglarturali/',
      icon: ['fab', 'instagram'],
      isMain: false,
    },
  ],
};
