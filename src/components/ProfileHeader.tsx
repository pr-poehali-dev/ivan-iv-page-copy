
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface ProfileHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <Card className="w-full mb-4 overflow-hidden">
      {/* Cover image */}
      <div 
        className="w-full h-48 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546555661-d0d9a413aded?w=800&auto=format&fit=crop&q=80")' }}
      />
      
      {/* Profile info */}
      <div className="flex p-4 md:p-6 relative">
        <div className="absolute -top-16 left-6 border-4 border-white rounded-full">
          <Avatar className="h-32 w-32">
            <img 
              src="https://images.unsplash.com/photo-1562873658-43f3d34dab55?w=400&auto=format&fit=crop&q=80" 
              alt="Иван Грозный"
              className="object-cover w-full h-full"
            />
          </Avatar>
        </div>
        
        <div className="flex flex-col mt-16 w-full">
          <div className="flex justify-between items-start w-full">
            <div>
              <h1 className="text-2xl font-bold">Иван IV Васильевич (Грозный)</h1>
              <p className="text-gray-500">Царь всея Руси · Москва, Русское царство</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="UserPlus" className="mr-2 h-4 w-4" />
              Добавить в друзья
            </Button>
          </div>
          
          <div className="flex mt-2 text-sm text-gray-500">
            <span className="flex items-center mr-4">
              <Icon name="MapPin" className="mr-1 h-4 w-4" />
              Москва
            </span>
            <span className="flex items-center mr-4">
              <Icon name="Briefcase" className="mr-1 h-4 w-4" />
              Царь всея Руси
            </span>
            <span className="flex items-center">
              <Icon name="Calendar" className="mr-1 h-4 w-4" />
              Присоединился в 1530 году
            </span>
          </div>
        </div>
      </div>
      
      {/* Navigation tabs */}
      <div className="px-4 md:px-6">
        <Separator />
        <div className="flex overflow-x-auto">
          <Button 
            variant={activeTab === 'main' ? 'default' : 'ghost'} 
            className="rounded-none px-4 py-2" 
            onClick={() => setActiveTab('main')}
          >
            <Icon name="Home" className="mr-2 h-4 w-4" />
            Главная
          </Button>
          <Button 
            variant={activeTab === 'friends' ? 'default' : 'ghost'} 
            className="rounded-none px-4 py-2" 
            onClick={() => setActiveTab('friends')}
          >
            <Icon name="Users" className="mr-2 h-4 w-4" />
            Друзья
          </Button>
          <Button 
            variant={activeTab === 'communities' ? 'default' : 'ghost'} 
            className="rounded-none px-4 py-2" 
            onClick={() => setActiveTab('communities')}
          >
            <Icon name="Users" className="mr-2 h-4 w-4" />
            Сообщества
          </Button>
        </div>
        <Separator />
      </div>
    </Card>
  );
};

export default ProfileHeader;
