interface SignInCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// This is a placeholder authentication function
// In a real application, this would make an API call to your backend
export async function signIn({ email, password, rememberMe }: SignInCredentials): Promise<{ success: boolean; error?: string }> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // For demo purposes, accept any email with a valid format and password longer than 6 characters
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 6;

    if (!isValidEmail) {
      return { success: false, error: 'Invalid email format' };
    }

    if (!isValidPassword) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    // In a real application, you would:
    // 1. Make an API call to verify credentials
    // 2. Receive and store authentication token
    // 3. Set up user session

    // For demo, store a simple auth flag
    if (rememberMe) {
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      sessionStorage.setItem('isAuthenticated', 'true');
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: 'An error occurred during sign in' };
  }
}

export function isAuthenticated(): boolean {
  return (
    localStorage.getItem('isAuthenticated') === 'true' ||
    sessionStorage.getItem('isAuthenticated') === 'true'
  );
}

export function signOut(): void {
  localStorage.removeItem('isAuthenticated');
  sessionStorage.removeItem('isAuthenticated');
}
