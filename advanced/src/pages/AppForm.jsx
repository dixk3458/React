import React, { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    // 객체의 키 값이 동적으로 할당될때에는 [] 사용하기
    setForm(form => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
