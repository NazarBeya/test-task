import * as zod from "zod";

export enum NativeUserRoles {
  ADMIN = "admin",
  USER = "user",
  SUPER_ADMIN = "superadmin",
  SUPPORT = "support",
}

const role = zod.nativeEnum(NativeUserRoles);
type UserRoles = zod.infer<typeof role>;

type UserType = {
  role: UserRoles;
};

export type UserOrNull = UserType | null;
