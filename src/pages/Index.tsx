
import React, { useState } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import PostCard from '@/components/PostCard';
import PhotoGrid from '@/components/PhotoGrid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1549737221-bcd871da79c3?w=400&auto=format&fit=crop&q=80',
    alt: 'Троицкий собор'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&auto=format&fit=crop&q=80',
    alt: 'Кремль'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&auto=format&fit=crop&q=80',
    alt: 'Церковь Василия Блаженного'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400&auto=format&fit=crop&q=80',
    alt: 'Палаты'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1590430676517-1594f94e01c9?w=400&auto=format&fit=crop&q=80',
    alt: 'Успенский собор'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=400&auto=format&fit=crop&q=80',
    alt: 'Казанский собор'
  }
];

const friends = [
  { id: 1, name: 'Алексей Адашев', avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=60&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Андрей Курбский', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Малюта Скуратов', avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=60&auto=format&fit=crop&q=80' }
];

const communities = [
  { id: 1, name: 'Опричнина', members: 1565, avatar: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=60&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Стрелецкое войско', members: 25000, avatar: 'https://images.unsplash.com/photo-1551893134-55fe5225e040?w=60&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Боярская дума', members: 150, avatar: 'https://images.unsplash.com/photo-1549942514-bf87b7b8cd99?w=60&auto=format&fit=crop&q=80' }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  const MainContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <PostCard
          author="Иван IV Васильевич (Грозный)"
          avatar="https://images.unsplash.com/photo-1562873658-43f3d34dab55?w=400&auto=format&fit=crop&q=80"
          date="25 апреля 1560"
          content="Сегодня был подписан важный указ о расширении земель. Русское царство становится ещё больше! Присоединены новые земли на востоке."
          likes={1547}
          comments={342}
          shares={95}
        />
        <PostCard
          author="Иван IV Васильевич (Грозный)"
          avatar="https://images.unsplash.com/photo-1562873658-43f3d34dab55?w=400&auto=format&fit=crop&q=80"
          date="14 марта 1559"
          content="Кто хочет побеседовать со мной о государственных делах? Пишите в личные сообщения. Особенно интересуют вопросы судебной реформы."
          image="https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?w=800&auto=format&fit=crop&q=80"
          likes={2438}
          comments={531}
          shares={157}
        />
        <PostCard
          author="Иван IV Васильевич (Грозный)"
          avatar="https://images.unsplash.com/photo-1562873658-43f3d34dab55?w=400&auto=format&fit=crop&q=80"
          date="2 февраля 1558"
          content="Начинаем Ливонскую войну! Всем боярам явиться на сбор. Будем расширять земли на запад, нужен выход к Балтийскому морю для торговли."
          likes={3254}
          comments={827}
          shares={412}
        />
      </div>
      <div>
        <PhotoGrid photos={photos} />
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Друзья</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {friends.map(friend => (
                <div key={friend.id} className="flex items-center gap-3">
                  <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="font-medium">{friend.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const FriendsContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Мои друзья</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...friends, ...friends, ...friends].map((friend, index) => (
            <div key={`${friend.id}-${index}`} className="flex items-center gap-3 p-3 border rounded-lg">
              <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-medium">{friend.name}</div>
                <div className="text-sm text-gray-500">Друг с 1550 года</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const CommunitiesContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Мои сообщества</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {communities.map(community => (
            <div key={community.id} className="flex items-center gap-3 p-3 border rounded-lg">
              <img src={community.avatar} alt={community.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-medium">{community.name}</div>
                <div className="text-sm text-gray-500">{community.members} участников</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <div className="container mx-auto pt-4 px-4">
        <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'main' && <MainContent />}
        {activeTab === 'friends' && <FriendsContent />}
        {activeTab === 'communities' && <CommunitiesContent />}
      </div>
    </div>
  );
};

export default Index;
