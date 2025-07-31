const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchListings(params = {}) {
  const url = new URL(`${BASE_URL}/listings`);
  Object.entries(params).forEach(([key, val]) => val && url.searchParams.append(key, val));
  
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch listings");
  return res.json();
}

export async function fetchListingById(id) {
  const res = await fetch(`${BASE_URL}/listings/${id}`);
  if (!res.ok) throw new Error("Failed to fetch listing");
  return res.json();
}
