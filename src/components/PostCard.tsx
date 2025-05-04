
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PostCardProps {
  author: string;
  avatar: string;
  date: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  avatar,
  date,
  content,
  image,
  likes,
  comments,
  shares
}) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3 mb-4">
          <Avatar>
            <img src={avatar} alt={author} className="object-cover" />
          </Avatar>
          <div>
            <h3 className="font-semibold">{author}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <p className="mb-4">{content}</p>
        {image && (
          <div className="rounded-md overflow-hidden mb-4">
            <img src={image} alt="Post content" className="w-full object-cover h-auto max-h-[400px]" />
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t flex justify-between">
        <Button variant="ghost" size="sm">
          <Icon name="ThumbsUp" className="mr-2 h-4 w-4" />
          {likes}
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
          {comments}
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="Share2" className="mr-2 h-4 w-4" />
          {shares}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
