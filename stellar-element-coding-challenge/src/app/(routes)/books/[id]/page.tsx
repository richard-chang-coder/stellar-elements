import BookDetail from '@/components/BookDetail';
import Breadcrumb from '@/components/BreadCrumbs';
import Header from '@/components/Header';
import getBookDetail from '@/libs/getBookDetail';
export default async function BookDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const detail = await getBookDetail({ bookId: params.id });
	return (
		<main className="pb-10">
			<Header />
			<Breadcrumb current={detail.volumeInfo.title} />
			<BookDetail detail={detail.volumeInfo} />
		</main>
	);
}
