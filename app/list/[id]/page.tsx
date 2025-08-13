'use client'

import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Item {
  id: number;
  title: string;
  description: string;
  content: string;
}

const dummyData: Item[] = [
  { 
    id: 1, 
    title: '첫 번째 아이템', 
    description: '첫 번째 아이템 설명입니다.',
    content: '첫 번째 아이템의 상세 내용입니다. 여기에 더 자세한 정보가 포함됩니다.'
  },
  { 
    id: 2, 
    title: '두 번째 아이템', 
    description: '두 번째 아이템 설명입니다.',
    content: '두 번째 아이템의 상세 내용입니다. 다양한 정보를 확인할 수 있습니다.'
  },
  { 
    id: 3, 
    title: '세 번째 아이템', 
    description: '세 번째 아이템 설명입니다.',
    content: '세 번째 아이템의 상세 내용입니다. 유용한 정보들이 담겨있습니다.'
  },
  { 
    id: 4, 
    title: '네 번째 아이템', 
    description: '네 번째 아이템 설명입니다.',
    content: '네 번째 아이템의 상세 내용입니다. 관련된 모든 내용을 확인하세요.'
  },
  { 
    id: 5, 
    title: '다섯 번째 아이템', 
    description: '다섯 번째 아이템 설명입니다.',
    content: '다섯 번째 아이템의 상세 내용입니다. 완전한 정보를 제공합니다.'
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function ItemDetailPage({ params }: PageProps) {
  const itemId = parseInt(params.id);
  const item = dummyData.find(item => item.id === itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link 
          href="/list"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          ← 리스트로 돌아가기
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
        <p className="text-gray-600 text-lg mb-6">{item.description}</p>
        
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">상세 내용</h2>
          <p className="text-gray-700 leading-relaxed">{item.content}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Link 
          href="/list"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          리스트로 돌아가기
        </Link>
        <Link 
          href="/"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          홈으로 가기
        </Link>
      </div>
    </div>
  );
}