'use client';
import { useState } from 'react';
import styles from './auth.module.scss';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading/Loading';
import Btn from '@/components/Btn';
import Input_m from '@/components/Input_m';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    const iranPhoneRegex = /^09\d{9}$/;
    if (!iranPhoneRegex.test(phone)) {
      alert('شماره تلفن نامعتبر است!');
      return;
    }

    setLoading(true);
    
    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } catch (err) {
      console.error('خطا در دریافت اطلاعات:', err);
      alert('دریافت اطلاعات با خطا مواجه شد');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <Input_m phone={phone} setPhone={setPhone} />
      {loading ? <Loading /> : <Btn handleLogin={handleLogin} />}
    </div>
  );
}
