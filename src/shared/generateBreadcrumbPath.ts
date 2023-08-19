export type BreadcrumbPathCreatorReturn = {
  label: string;
  href: string;
};

export const generateBreadcrumbPath = (
  pathname: string,
): Array<BreadcrumbPathCreatorReturn> => {
  if (pathname === '/') {
    return [];
  }

  const hrefArr = [];
  const resultArr = [];
  const splitted = pathname.split('/').filter((item) => item);

  for (let i = 0; i < splitted.length; i++) {
    hrefArr.push(splitted[i]);

    const href = i > 0 ? `/${hrefArr.join('/')}` : `/${splitted[i]}`;

    resultArr.push({ label: splitted[i], href });
  }

  return resultArr;
};
