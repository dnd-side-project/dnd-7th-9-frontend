import Error from 'next/error';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import CreateStudyLastScreen from '@app.feature/create-study/screen/CreateStudyLastScreen';

const CreateStudy: NextPage = () => {
	const router = useRouter();

	if (router.query.id === '1') return <div>ID 1</div>;
	if (router.query.id === '2') return <div>ID 2</div>;
	if (router.query.id === '3') return <div>ID 3</div>;
	if (router.query.id === '4') return <CreateStudyLastScreen />;
	return <Error statusCode={404} title="page Not Found" />;
};

export default CreateStudy;
