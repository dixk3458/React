export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      // action 객체로부터 update 이전의 값 
      const { prev, current } = action;
      // const prev = action.prev;
      // const current = action.current;

      return {
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }

    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: name, title: title }],
      };
    }

    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter(mentor => {
          return mentor.name !== action.name;
        }),
      };
    }

    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
