import { Roboto } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'CleanView ';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - CleanView`;
export const SITE_DESCRIPTION_DEFAULT = 'CleanView Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], // Adjust weights based on your needs
    variable: '--font-roboto', // Update the CSS variable name
});