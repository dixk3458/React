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
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMzFfMjIx%2FMDAxNjgwMjUyODAyNjE0.7ZUPLVcI7UzBwvc4Pr_jeElVZdXO-ZCw54IPwLmJAWog.GAM_i9g9R5oJ6-stsq9jNYs5dgjDWWtdE2CqS7Psrg4g.JPEG.nailclassic%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25285%2529.jpg&type=a340'
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
