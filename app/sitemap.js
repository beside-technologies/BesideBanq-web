export default function sitemap() {
  const baseUrl = 'https://besidebanq.com';

  const corridors = [
    'canada-to-nigeria',
    'uk-to-china',
    'us-to-ghana',
    'eu-to-kenya'
  ];

  const corridorUrls = corridors.map((c) => ({
    url: `${baseUrl}/send/${c}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...corridorUrls,
  ];
}
