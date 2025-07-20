'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';
import Loading from '@/components/loading/Loading';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.replace('/auth');
    }
    setLoading(false)
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
