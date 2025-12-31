export const getBalance = async () => {
  const res = await fetch("api/getBalance");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
