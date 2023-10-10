import * as zod from "zod";

const email = zod.string().trim().min(1).email();

const password = zod.string().min(8);

export type Email = zod.infer<typeof email>;
export type Password = zod.infer<typeof password>;

export type Login = {
  email: Email;
  password: Password;
};
