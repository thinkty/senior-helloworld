import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { id: postId } = useParams();

  return (
    <div>
      {postId}
    </div>
  );
}
