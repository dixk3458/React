import React from 'react';
import Profile from './components/Profile';
import './App.css';

export default function AppProfile() {
  return (
    <div>
      <Profile
        image={
          'https://lh3.googleusercontent.com/71taw1bTsnXa4WJpxkn8TbyQD9L_Ha4_4WOYKGKiz80GF4GotWNBBTwVKmOKq_lWw6aiR24lo_QbXeVleIDG7SBr6Pdr9gwENQkBgKyUxg'
        }
        name={'정재웅'}
        title={'프론트엔드 개발자'}
        isNew={true}
      />
      <Profile
        image={
          'https://search.pstatic.net/common?type=b&size=336&expire=1&refresh=true&quality=100&direct=true&src=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFs8bu_WacAA8ee1.jpg'
        }
        name={'지수'}
        title={'블랙핑크'}
        isNew={false}
      />
    </div>
  );
}
