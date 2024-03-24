import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e2FYCvAyC93EI5By1QT26cMWb8",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
