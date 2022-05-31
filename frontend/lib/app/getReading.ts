export const getReading = async () => {
  var requestOptions = {
    method: "GET",
  };

  const hostname = window.location.hostname;
  const siteUrl =
    hostname === "localhost"
      ? "http://localhost:3000"
      : "https://water-authority.vercel.app/";

  const data = await fetch(`${siteUrl}/api/getReading`, requestOptions).then(
    (response) => response.json()
  );

  return data;
};
