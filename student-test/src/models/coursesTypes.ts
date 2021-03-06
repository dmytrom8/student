export interface Course {
  id: number;
  name: string;
}

export enum CourseActionType {
  CREATE_COURSE_REQUEST = 'COURSE/CREATE_COURSE_REQUEST',
  CREATE_COURSE_SUCCESS = 'COURSE/CREATE_COURSE_SUCCESS',
  CREATE_COURSE_FAILURE = 'COURSE/CREATE_COURSE_FAILURE',
  GET_COURSES_REQUEST = 'COURSE/GET_COURSES_REQUEST',
  GET_COURSES_SUCCESS = 'COURSE/GET_COURSES_SUCCESS',
  GET_COURSES_FAILURE = 'COURSE/GET_COURSES_FAILURE',
}
