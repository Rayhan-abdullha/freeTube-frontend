import { Outfit} from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'FreeTube';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - FreeTube`;
export const SITE_DESCRIPTION_DEFAULT = 'FreeTube Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit-sans'
});