/** @format */

import fetcher from "./fetcher";

type Body = { email: string; password: string };
type Mode = "signin" | "signup";

export const auth = (mode: Mode, body: Body) => fetcher(`${mode}`, body);
