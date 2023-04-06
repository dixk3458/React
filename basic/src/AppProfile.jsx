import React from 'react';
import Profile from './components/Profile';
import './App.css';
import Avatar from './components/Avatar';

export default function AppProfile() {
  const handleClick = event => {
    console.log(event);
    alert('event2 발생');
  };
  return (
    <div>
      <button
        onClick={event => {
          console.log(event);
          alert('event1 발생');
        }}
      >
        Button
      </button>
      <button onClick={handleClick}>Button2</button>
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
      <Avatar
        image={
          'https://search.pstatic.net/common?type=b&size=144&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202209%2F20220913133442989.jpg'
        }
        isNew={true}
      />
    </div>
  );
}
