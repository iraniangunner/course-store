import { CourseDetailsParams } from "@/types/course-details.interface";

export type CourseAsideProps = Pick<
  CourseDetailsParams,
  | "basePrice"
  | "numberOfLectures"
  | "numOfStudents"
  | "duration"
  | "recordStatus"
  | "isDownloadable"
  | "averageReviewRating"
  | "level"
  | "numOfReviews"
  | "authorName"
  | "authorSpecialty"
  | "profileImageId"
  | "levelNumber"
>;
