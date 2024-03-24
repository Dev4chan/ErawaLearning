import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e2FYCvAyC93EI5By1QT26cMWb8",
  "user_2e0O2MRjWZVOafFb2GJzo98KzZ2"
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
