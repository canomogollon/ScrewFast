const getPermalink = (slug: string): string => {
  if (!slug) return import.meta.env.BASE_URL;
  // Asegurarse de que la base y el slug se unen correctamente
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL.slice(0, -1) : import.meta.env.BASE_URL;
  const finalSlug = slug.startsWith('/') ? slug : `/${slug}`;
  
  return `${base}${finalSlug}`;
};

export default getPermalink;