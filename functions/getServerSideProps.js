import Axios from "axios";

export default async ({ req: { cookies = {} } }) => {
  let user = false;
  const token = cookies["connect.sid"];

  try {
    if (token) {
      const { data } = await Axios.get(`${process.env.BACKEND_URL}/me`, {
        headers: {
          Cookie: `connect.sid=${token}`,
        },
      });
      user = data;
    }
  } catch (e) {
    console.error(e);
  }

  const obj = { props: { user } };

  if (!user)
    obj.redirect = {
      permanent: false,
      destination: "/401",
    };

  return {
    props: {
      user,
    },
  };
};
