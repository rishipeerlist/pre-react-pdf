const peerlistAPI = process.env.NEXT_PUBLIC_PEERLIST_ENDPOINT;

export const getProfile = async () => {
  const result = await fetch(`${peerlistAPI}/thefierycoder`);
  const profile = await result.json();
  return profile;
};
