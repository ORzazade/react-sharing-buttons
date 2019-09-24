export const defaultUrl =
  "https://www.npmjs.com/package/@dev-geeks/react-social-sharing-buttons";
  
export const socialShareLinks = {
  facebook: url => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  twitter: url => `http://twitter.com/share?${url}`,
  linkedin: url => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  google: url => `https://plus.google.com/share?url=${url}`
};
