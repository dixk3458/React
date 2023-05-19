import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    // 1. 클릭이 되었을때 프롬프트를 통해 prev,current에 저장한다.
    // 2. 저장된 값을 바탕으로 setPerson()을 하는데 , prev라면 current로 바꾼다.

    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    // React에서 사용하는 모든 State는 불변성을 유지해야한다.
    // 만약 변경해야한다면, 새로운 값,객체,배열로 만들어줘야한다.
    // 객체 내부를 변경하고 싶다면, 참조값을 변경해줘야 React는 변화를 인지한다.

    // 즉 setPerson()을 호출해 person의 값을 바꿀건데, 이전에 사용한 person을 인자로 받아 새로운객체를 만들어 참조값이 바뀐다.
    setPerson(person => ({
      ...person,
      mentors: person.mentors.map(mentor => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };

  const handleAdd = () => {
    const name = prompt('새로운 멘토의 이름은 무엇인가요?');
    const title = prompt('새로운 멘토의 직업은 무엇인가요?');

    if( name == null || title == null ) return;
    
    setPerson(person => ({
      ...person,
      mentors: [...person.mentors, { name: name, title: title }],
    }));
  };

  const handleDelete = () => {
    // 1. 삭제 할 멘토 이름 전달받음
    // 2. 있으면 해당 이름을 안가진 배열로 filter를 해준다.
    const name = prompt('누구를 삭제하고 싶은가요?');

    setPerson(person => ({
      ...person,
      mentors: person.mentors.filter(mentor => {
        return mentor.name !== name;
      }),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => {
          return (
            <li key={index}>
              {mentor.name}({mentor.title})
            </li>
          );
        })}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '정재웅',
  title: '개발자',
  mentors: [
    {
      name: '엘리',
      title: '시니어 개발자',
    },
    {
      name: '장홍준',
      title: '교수님',
    },
  ],
};
