import { getCourses, getUserProgress } from "@/db/queries";
import { currentUser } from "@clerk/nextjs";

import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();
  const data = await currentUser();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-5xl font-bold text-slate-500 mt-4 mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Hi, {data?.firstName} !
      </h1>
      <h1 className="text-3xl font-bold text-slate-500">Let's learn !</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
