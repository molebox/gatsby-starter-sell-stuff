export const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch("/.netlify/functions/create-session", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartDetails),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));

  redirectToCheckout({ sessionId: response.sessionId });
};
