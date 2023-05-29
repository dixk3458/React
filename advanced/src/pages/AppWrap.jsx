import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image={
            'https://phinf.pstatic.net/contact/20230529_82/1685352825128zmUek_PNG/avatar_profile.png?type=s160'
          }
          name={'정재웅'}
          size={500}
        />
        <p>이미지 사용할래, 노랑배경도 </p>
      </Navbar>
      <Navbar>
        <p>이미지 사용안할래,노랑배경만 사용할래</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ background: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img src={image} alt={name} width={size} height={size} />
    </div>
  );
}
