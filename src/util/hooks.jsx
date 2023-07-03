import { createClient } from "contentful"

export const useContentful = () => {
  const client = createClient({
    space: 'ro8ge2vzlzpv',
    accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
  })

  const getBlogPosts = async () => {
    try {
      const entries = client.getEntries({});
      return entries;
    } catch (e) {
      console.error('Problem fetching from contentful:', e)
    }
  }
  const getBlogPost = async (id) => {
    try {
      return client.getEntry(id);
    } catch (e) {
      console.error('Problem fetching from contentful:', e);
    }
  }
  return { getBlogPosts, getBlogPost }
}
