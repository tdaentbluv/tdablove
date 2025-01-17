'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../../utils/auth';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/signin');
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Admin Dashboard
            </h1>
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Users</h3>
                  <p className="text-3xl font-bold text-primary">150</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Projects</h3>
                  <p className="text-3xl font-bold text-primary">24</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reports</h3>
                  <p className="text-3xl font-bold text-primary">89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
