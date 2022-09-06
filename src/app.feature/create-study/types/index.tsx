export type Category = 'EMPLOYMENT' | 'LANGUAGE' | 'CERTIFICATE' | 'ETC';
export interface PostStudyBody {
	groupName: string;
	groupStartDate: string; // TO DO "YYYY-MM-DD" 형식에 맞춰지게 타입 부여
	groupEndDate: string; // TO DO "YYYY-MM-DD" 형식에 맞춰지게 타입 부여
	groupGoal: string;
	groupCategory: Category; // get study categories api를 통해 받아옴
	invitedUserEmailList: string[];
}
