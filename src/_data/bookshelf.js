import EleventyFetch from '@11ty/eleventy-fetch';

export default async function () {
  let url = 'https://raw.githubusercontent.com/flamedfury/metadata-library/main/_data/read.json';

  // returning promise

  let data = await EleventyFetch(url, {
    duration: '1d',
    type: 'json'
  });

  return data;
}
