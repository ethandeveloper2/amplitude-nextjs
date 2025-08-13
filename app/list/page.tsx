import Link from 'next/link';

interface Item {
  id: number;
  title: string;
  description: string;
}

const dummyData: Item[] = [
  { id: 1, title: '첫 번째 아이템', description: '첫 번째 아이템 설명입니다.' },
  { id: 2, title: '두 번째 아이템', description: '두 번째 아이템 설명입니다.' },
  { id: 3, title: '세 번째 아이템', description: '세 번째 아이템 설명입니다.' },
  { id: 4, title: '네 번째 아이템', description: '네 번째 아이템 설명입니다.' },
  { id: 5, title: '다섯 번째 아이템', description: '다섯 번째 아이템 설명입니다.' },
];

export default function ListPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">아이템 리스트</h1>
      
      <div className="grid gap-4 mb-6">
        {dummyData.map((item) => (
          <div 
            key={item.id} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-3">{item.description}</p>
            <Link 
              href={`/list/${item.id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              자세히 보기
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Link 
          href="/"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}