import { profile } from '@/data/profile.js';

export const SITE_URL = 'https://deepakkv8335.co.in';
export const SITE_NAME = profile.name;
export const DEFAULT_TITLE = `${profile.name} | Software Developer`;
export const DEFAULT_DESCRIPTION = profile.hero.description;
export const DEFAULT_IMAGE = `${SITE_URL}${profile.photo.src}`;
export const DEFAULT_IMAGE_WIDTH = profile.photo.width;
export const DEFAULT_IMAGE_HEIGHT = profile.photo.height;
