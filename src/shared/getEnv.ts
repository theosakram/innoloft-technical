export const getEnv = () => {
  return {
    appId: process.env.APP_ID ? +process.env.APP_ID : 1,
    logo: process.env.LOGO_URL || 'https://img.innoloft.de/logo.svg',
    mainColor: process.env.MAIN_COLOR || '#272e71',
    hasUserSection: process.env.HAS_USER_SECTION === 'true' ? true : false,
  };
};
